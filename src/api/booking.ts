import fetchApi from ".";

export const bookingAPI = {
  makeReservation: async (formData: FormData) => {
    return fetchApi(`/booking/reservations/`, {
      method: 'POST',
      body: formData,
    });
  },

  getTimeSlots: async (date: string, locationId: number) => {
    return fetchApi(`/booking/time-slots/?date=${date}&location=${locationId}`, {
      method: 'GET',
    });
  },
};
