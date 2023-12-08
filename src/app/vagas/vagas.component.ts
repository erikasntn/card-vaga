import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vagas',
  templateUrl: './vagas.component.html',
  styleUrls: ['./vagas.component.css']
})
export class VagasComponent implements OnInit {

  vagas: any[] = [
    {
      area: 'Tecnologia',
      empresa: 'Vals Pustria Conti',
      perfil: 'SQL Engineer',
      candidatos: 'f',
      url: 'https://www.facebook.com/'
    },
    {
      area: 'Tecnologia',
      empresa: 'Maca Postaga Com',
      perfil: 'Java Developer',
      candidatos: 'f',
      url: 'https://www.facebook.com/'
    },
    {
      area: 'Tecnologia',
      empresa: 'Dart Developer',
      candidatos: 'f',
      url: 'https://www.facebook.com/'
    },
    {
      area: 'Tecnologia',
      empresa: 'Cit Developer',
      candidatos: 'f',
      url: 'https://www.facebook.com/'
    }
  ];
  constructor() {}

  ngOnInit() {}

}
