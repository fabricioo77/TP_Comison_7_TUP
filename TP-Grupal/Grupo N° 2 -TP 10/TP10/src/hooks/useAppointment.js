import { useState, useEffect, useCallback } from "react";
import * as appointmentService from "../services/appointmentService";

export const useAppointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadAppointments = useCallback(async () => {
    try {
      setLoading(true);
      const data = await appointmentService.getAllAppointments();
      setAppointments(data);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadAppointments();
  }, [loadAppointments]);

  const addAppointment = async (appointmentData) => {
    try {

      const maxId = appointments.reduce(
        (max, appt) => (Number(appt.id) > max ? Number(appt.id) : max),
        0
      );

      const dataToSave = {
        ...appointmentData,
        clientId: parseInt(appointmentData.clientId, 10),
        serviceId: parseInt(appointmentData.serviceId, 10),
        id: maxId + 1,
      };

      const newAppointment = await appointmentService.createAppointment(
        dataToSave
      );

      setAppointments((prev) => [...prev, newAppointment]);
    } catch (err) {
      console.error("Error al agregar el turno:", err);
    }
  };

  const removeAppointment = async (id) => {
    try {
      await appointmentService.deleteAppointment(id);
      setAppointments((prev) => prev.filter((appt) => appt.id !== id));
    } catch (err) {
      console.error("Error al eliminar el turno:", err);
    }
  };

  const updateAppointment = async (id, appointmentData) => {
    try {
      const dataToSave = {
        ...appointmentData,
        clientId: parseInt(appointmentData.clientId, 10),
        serviceId: parseInt(appointmentData.serviceId, 10),
        id: id,
      };

      const updatedAppointment = await appointmentService.updateAppointment(
        id,
        dataToSave
      );

      setAppointments((prev) =>
        prev.map((appt) => (appt.id === id ? updatedAppointment : appt))
      );
    } catch (err) {
      console.error("Error al actualizar el turno:", err);
    }
  };

  return {
    appointments,
    loading,
    error,
    addAppointment,
    removeAppointment,
    updateAppointment,
  };
};