import fetchApi from ".";

export const bookingAPI = {
  makeReservation: async (formData: FormData) => {

    return fetchApi(`/booking/reservation/`, {
      method: 'POST',
      body: formData,
    });
  },

  getTimeSlots: async (date: string, locationId: number) => {

    return fetchApi(`/booking/availability/?date=${date}&location=${locationId}`, {
      method: 'GET',  
    });
  },
};
