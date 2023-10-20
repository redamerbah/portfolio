import { Injectable } from '@angular/core';
import { Project } from '../models/project';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SProjectsService {

  projects: Project[] = [
    {
      _id: "1",
      title: "CERIsoNET",
      desc: "It's an application for posting advertisements developed using Angular / NodeJs",
      typeOfProject: "Software",
      imageUrl: "assets/img/meowapp.svg"
    },
    {
      _id: "2",
      title: "Sportify",
      desc: "A Recommandation system that helps the coach to choose the best linup for a football team",
      typeOfProject: "Data Science",
      imageUrl: "assets/img/LogoSportify.svg"
    },

    {
      _id: "3",
      title: "Monitoring Software",
      desc: "The goal of this mini-project is to create a monitoring software platform for tracking user activity on a Linux server, using Python & Bash",
      typeOfProject: "Software",
      imageUrl: "assets/img/monitoring.png"
    },

    {
      _id: "4",
      title: "Calculator",
      desc: "We have created a calculator based on Artificial Intelligence, and the NLP model was provided by the professor in charge of the module, using JAVA ",
      typeOfProject: "Data Science",
      imageUrl: "assets/img/Calcul.png"
    },

  ];

  getProjects(): Observable<Project[]> {
    return of<Project[]>(this.projects);
  }
}
