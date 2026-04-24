import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// Mock Patient Data with current dates
const getCurrentDate = () => new Date().toISOString().split('T')[0];
const getLastMonth = (monthsAgo) => {
  const date = new Date();
  date.setMonth(date.getMonth() - monthsAgo);
  return date.toISOString().split('T')[0];
};

const MOCK_PATIENTS = [
  {
    id: 'p1',
    name: 'Rahul Verma',
    age: 32,
    bloodGroup: 'B+',
    phone: '+91 98765 43210',
    email: 'rahul.verma@email.com',
    address: 'A-123, Green Park, Delhi',
    lastVisit: getCurrentDate(),
    nextAppointment: getCurrentDate(),
    diagnosis: 'Hypertension',
    status: 'active',
    doctorId: '1',
    createdAt: getLastMonth(2)
  },
  {
    id: 'p2',
    name: 'Priya Malhotra',
    age: 28,
    bloodGroup: 'O+',
    phone: '+91 87654 32109',
    email: 'priya.malhotra@email.com',
    address: 'B-45, South Extension, Delhi',
    lastVisit: getCurrentDate(),
    nextAppointment: getCurrentDate(),
    diagnosis: 'Migraine',
    status: 'active',
    doctorId: '1',
    createdAt: getLastMonth(1)
  },
  {
    id: 'p3',
    name: 'Amit Sharma',
    age: 45,
    bloodGroup: 'A+',
    phone: '+91 99887 66554',
    email: 'amit.sharma@email.com',
    address: 'C-78, Rajendra Nagar, Ghaziabad',
    lastVisit: getCurrentDate(),
    nextAppointment: getCurrentDate(),
    diagnosis: 'Diabetes Type 2',
    status: 'active',
    doctorId: '1',
    createdAt: getCurrentDate()
  },
  {
    id: 'p4',
    name: 'Neeta Desai',
    age: 35,
    bloodGroup: 'AB+',
    phone: '+91 98765 12345',
    email: 'neeta.desai@email.com',
    address: 'D-12, Vasant Vihar, Delhi',
    lastVisit: getCurrentDate(),
    nextAppointment: getCurrentDate(),
    diagnosis: 'Thyroid',
    status: 'active',
    doctorId: '1',
    createdAt: getLastMonth(3)
  },
  {
    id: 'p5',
    name: 'Suresh Patel',
    age: 52,
    bloodGroup: 'O-',
    phone: '+91 87654 98765',
    email: 'suresh.patel@email.com',
    address: 'E-34, Indirapuram, Noida',
    lastVisit: getCurrentDate(),
    nextAppointment: getCurrentDate(),
    diagnosis: 'Arthritis',
    status: 'active',
    doctorId: '1',
    createdAt: getLastMonth(4)
  }
];

const usePatientStore = create(
  persist(
    (set, get) => ({
      patients: MOCK_PATIENTS,
      loading: false,
      error: null,

      // Get all patients
      getPatients: () => {
        return get().patients;
      },

      // Get patient by ID
      getPatientById: (id) => {
        return get().patients.find(p => p.id === id);
      },

      // Add new patient
      addPatient: async (patientData) => {
        set({ loading: true, error: null });
        
        await new Promise(resolve => setTimeout(resolve, 500));
        
        const newPatient = {
          id: `p${Date.now()}`,
          ...patientData,
          lastVisit: getCurrentDate(),
          nextAppointment: getCurrentDate(),
          createdAt: getCurrentDate(),
          status: 'active',
          doctorId: '1'
        };
        
        set(state => ({
          patients: [newPatient, ...state.patients],
          loading: false
        }));
        
        return { success: true, patient: newPatient };
      },

      // Update patient
      updatePatient: async (id, updatedData) => {
        set({ loading: true, error: null });
        
        await new Promise(resolve => setTimeout(resolve, 500));
        
        set(state => ({
          patients: state.patients.map(patient =>
            patient.id === id ? { ...patient, ...updatedData } : patient
          ),
          loading: false
        }));
        
        return { success: true };
      },

      // Delete patient
      deletePatient: async (id) => {
        set({ loading: true, error: null });
        
        await new Promise(resolve => setTimeout(resolve, 500));
        
        set(state => ({
          patients: state.patients.filter(patient => patient.id !== id),
          loading: false
        }));
        
        return { success: true };
      },

      // Get statistics for charts - FIXED VERSION
      getPatientStats: () => {
        const patients = get().patients;
        const now = new Date();
        const currentMonth = now.getMonth();
        const currentYear = now.getFullYear();
        
        // Monthly admissions (last 6 months)
        const monthlyData = [];
        const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        
        for (let i = 5; i >= 0; i--) {
          let month = currentMonth - i;
          let year = currentYear;
          
          if (month < 0) {
            month += 12;
            year -= 1;
          }
          
          const monthName = monthNames[month];
          const displayLabel = `${monthName} ${year}`;
          
          const count = patients.filter(p => {
            if (!p.createdAt) return false;
            const created = new Date(p.createdAt);
            return created.getMonth() === month && created.getFullYear() === year;
          }).length;
          
          monthlyData.push({ name: displayLabel, patients: count });
        }
        
        // Blood group distribution
        const bloodGroups = ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'];
        const bloodGroupData = bloodGroups.map(bg => ({
          name: bg,
          value: patients.filter(p => p.bloodGroup === bg).length
        })).filter(d => d.value > 0);
        
        // Age distribution
        const ageGroups = [
          { range: '0-18', min: 0, max: 18 },
          { range: '19-30', min: 19, max: 30 },
          { range: '31-45', min: 31, max: 45 },
          { range: '46-60', min: 46, max: 60 },
          { range: '60+', min: 61, max: 200 }
        ];
        
        const ageData = ageGroups.map(group => ({
          name: group.range,
          value: patients.filter(p => p.age >= group.min && p.age <= group.max).length
        })).filter(d => d.value > 0);
        
        // Diagnosis distribution for additional chart
        const diagnosisMap = {};
        patients.forEach(p => {
          if (p.diagnosis) {
            diagnosisMap[p.diagnosis] = (diagnosisMap[p.diagnosis] || 0) + 1;
          }
        });
        const diagnosisData = Object.entries(diagnosisMap).map(([name, value]) => ({ name, value }));
        
        return { 
          monthlyData, 
          bloodGroupData, 
          ageData, 
          diagnosisData,
          totalPatients: patients.length 
        };
      }
    }),
    {
      name: 'vitalsync-patients',
      getStorage: () => localStorage
    }
  )
);

export default usePatientStore;