// export const fetchMeetups = () =>
//     fetch('http://192.168.0.101:3000/api/meetups')
//         .then(res => res.json())

import axios from 'axios';
axios.defaults.baseURL = "http://192.169.0.101:3000/api";

const fakeGroupId = '5a96c7f12435d5092c90911a';

class MeetupApi{
  constructor(){
    this.groupId = fakeGroupId;
    this.path = '/groups/${this.groupId}/meetups';
  }

  async fetchGroupMeetups(){
    const { data } = await axios.get(this.path);

    return data.meetups;
  }
}

export {
  MeetupApi
};