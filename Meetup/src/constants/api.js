export const fetchMeetups = () =>
    fetch('http://192.168.0.101:3000/api/meetups')
        .then(res => res.json());