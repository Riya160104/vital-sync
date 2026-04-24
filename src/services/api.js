// Mock API service using localStorage
const PATIENTS_KEY = 'vitalsync-patients';

export const patientAPI = {
  getAll: () => {
    const data = localStorage.getItem(PATIENTS_KEY);
    return data ? JSON.parse(data) : [];
  },
  
  save: (patients) => {
    localStorage.setItem(PATIENTS_KEY, JSON.stringify(patients));
  },
  
  add: (patient) => {
    const patients = patientAPI.getAll();
    const newPatient = { ...patient, id: Date.now().toString() };
    patients.unshift(newPatient);
    patientAPI.save(patients);
    return newPatient;
  },
  
  update: (id, updatedData) => {
    const patients = patientAPI.getAll();
    const index = patients.findIndex(p => p.id === id);
    if (index !== -1) {
      patients[index] = { ...patients[index], ...updatedData };
      patientAPI.save(patients);
      return patients[index];
    }
    return null;
  },
  
  delete: (id) => {
    const patients = patientAPI.getAll();
    const filtered = patients.filter(p => p.id !== id);
    patientAPI.save(filtered);
    return true;
  }
};