import {Injectable} from '@angular/core';
import {Leader} from "../shared/leader";
import {LEADERS} from "../shared/Leaders";

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor() {
  }

  getLeader(id: string): Leader {
    return LEADERS.filter((leader) => (leader.id === id))[0];
  }

  getFeaturedLeader(): Leader {
    return LEADERS.filter((leader) => leader.featured)[0];

  }

  getLeaders(): Leader[] {
    return LEADERS;
  }
}
