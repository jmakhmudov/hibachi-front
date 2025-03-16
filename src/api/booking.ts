import fetchApi from ".";

export const bookingAPI = {
  makeReservation: async (formData: FormData) => {

    return fetchApi(`/booking/reservation/`, {
      method: 'POST',
      body: formData,
    });
  },

  getTimeSlots: async (date: string, locationSlug: string) => {

    return fetchApi(`/booking/availability/?date=${date}&location_slug=${locationSlug}`, {
      method: 'GET',  
    });
  },
};
