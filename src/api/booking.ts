import fetchApi from ".";

export const bookingAPI = {
  makeReservation: async (formData: FormData) => {
    const date = formData.get('date') as string;
    const [month, day, year] = date.split("/");
    const formattedDate = `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
    formData.delete('date')
    formData.set('date', formattedDate);

    return fetchApi(`/booking/reservation/`, {
      method: 'POST',
      body: formData,
    });
  },

  getTimeSlots: async (date: string, locationId: number) => {
    const [month, day, year] = date.split("/");
    const formattedDate = `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;

    return fetchApi(`/booking/availability/?date=${formattedDate}&location=${locationId}`, {
      method: 'GET',  
    });
  },
};
