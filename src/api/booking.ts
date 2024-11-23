import fetchApi from ".";

export const bookingAPI = {
  getLocations: async () => {
    return fetchApi('/booking/locations/', {
      method: 'GET',
    });
  },

  makeReservation: async (formData: FormData) => {
    return fetchApi(`/booking/reservations/`, {
      method: 'POST',
      body: formData
    });
  },

  getTimeSlots: async () => {
    return fetchApi(`/booking/time-slots/`, {
      method: 'GET',
    });
  },
};
