import { Component, OnInit } from '@angular/core';
import VCard from 'vcard-creator';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  vcardData: string;
  vcDataUrl: string = "";

  /**
   *
   */
  constructor() {
    const vc = new VCard('vcard');
    vc.addName("MERBAH", "Reda", "", "", "");
    vc.addAddress("18 Rue de la croix Avignon", "", "", "Avignon", "", "84000", "France", "HOME");
    vc.addPhoneNumber("+33652752479", "CELL");
    vc.addPhoneNumber("+33652752479", "WHATSAPP");
    vc.addEmail("redamerbah1999@gmail.com", "WORK");
    vc.addSocial("https://www.linkedin.com/in/reda-merbah-a28a021aa", "Linkedin", "reda merbah");
    vc.addURL("redamerbah.github.io/portfolio/", "WORK");

    this.vcardData = vc.toString();
  }

  ngOnInit(): void {
    this.vcDataUrl = this.generateDataUri(this.vcardData);
  }

  // Generate a data URI from the vCard data
  generateDataUri(data: string): string {
    const blob = new Blob([data], { type: 'text/vcard' });
    return URL.createObjectURL(blob);
  }

}
