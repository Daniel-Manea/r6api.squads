
export default async function Expiration() {


    function addMinutes(date: Date, minutes: number) {
        date.setMinutes(date.getMinutes() + minutes);

        return date;
    }

    const date = new Date();

    return addMinutes(date, 1).toISOString();

}