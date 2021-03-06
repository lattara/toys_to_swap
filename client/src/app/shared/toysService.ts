import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Charity } from './charity';
import { Observable } from 'rxjs';
import { Toy } from './toy';
import { Wish } from './wish';
import { Participate } from './participate';

@Injectable({
  providedIn: 'root'
})
export class toysService {


    charities: Set<Charity> = new Set<Charity>();
    toys: Set<Toy> = new Set<Toy>();
    toysURL = "http://localhost:3000"
  

  constructor(private http: HttpClient) { }

    getAllCharities() {
        this.http.get<Set<Charity>>(`${this.toysURL}/charity`)
        .subscribe(result => {
        this.charities.clear();
        result.forEach(t => this.charities.add(t));
        })
        return this.charities;
    }

    
    addToy(toy: Toy): Observable<any> {
        console.log(toy)
        return this.http.post<any>(`${this.toysURL}/toy/create`, toy);
    }

    getToys() 
    {
      return this.http.get<Set<Toy>>(`${this.toysURL}/toy`);
    }

    addWish(wish: Wish): Observable<any>
    {
        return this.http.post<any>(`${this.toysURL}/wish/create`, wish);
    }

    getWish(id: number)
    {
        return this.http.get<Set<Toy>>(`${this.toysURL}/wish/iwant/${id}`);
    }
  
    getUser(username: string){
        return this.http.get<any>(`${this.toysURL}/user/getUser/${username}`);
    }

    insertParticipate(participate: Participate)
    {
        return this.http.post<any>(`${this.toysURL}/events/participate`, participate);
    }

    getParticipatebyUser(id: number)
    {
        return this.http.get<Set<Participate>>(`${this.toysURL}/events/participate/${id}`);
    }

    deleteEventByUser(id: number)
    {
        return this.http.delete<any>(`${this.toysURL}/events/participate/${id}`)
    }

    deleteWishByUser(id: number)
    {
        return this.http.delete<any>(`${this.toysURL}/wish/deletewish/${id}`)
    }

    deleteToyByUser(id: number)
    {
        return this.http.delete<any>(`${this.toysURL}/toy/deletetoy/${id}`)
    }

    getToysByUser(id: number)
    {
        return this.http.get<Set<Toy>>(`${this.toysURL}/toy/mytoys/${id}`);
    }
}

