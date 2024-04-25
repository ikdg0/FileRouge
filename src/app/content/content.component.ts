import { Component, ViewChild } from '@angular/core';
import { TimerComponent } from '../timer/timer.component';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  @ViewChild('timer') timer: TimerComponent;

  salles = [
    {
      nom: "Salle à manger", ouverture: "08:00",
      fermeture: "22:00", statut: "Ouverte", image: "https://static.wixstatic.com/media/9d6c92_906c424eb8594831935e601e6e0d8373~mv2.jpg/v1/fill/w_1034,h_528,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/FB_IMG_1678904500880(1).jpg"
    },
    {
      nom: "SDB", ouverture: "08:00",
      fermeture: "22:00", statut: "Fermée", forcerClose : false, image: "https://media.licdn.com/dms/image/D5603AQGoKKMdNeTQ9A/profile-displayphoto-shrink_800_800/0/1690446623763?e=2147483647&v=beta&t=n8YkWiNesgx_62gRykoPI5xLCCUit1OXTjMkPH4ErcU"
    },
    {
      nom: "Garage", ouverture: "08:00",
      fermeture: "22:00", statut: "Ouverte",forcerClose : false, image: "https://www.socoren.com/wp-content/uploads/2022/12/creation-maison-sur-mesure.jpg"
    },
    {
      nom: "PAC", ouverture: "08:00",
      fermeture: "22:00", statut: "Fermée",forcerClose : false, image: "https://biograndest.org/wp-content/uploads/2020/04/illus_PAC.jpg"
    },
    {
      nom: "Buanderie", ouverture: "08:00",
      fermeture: "22:00", statut: "Ouverte",forcerClose : false, image: "https://www.maisonapart.com/images/auto/640-480-c/20151012_171724_blob-idea-groupe-spazioevoluzione13.jpg"
    },
    {
      nom: "Piscine", ouverture: "08:00",
      fermeture: "22:00", statut: "Fermée",forcerClose : false, image: "https://www.aquilus-piscines.com/wp-content/uploads/2021/12/petite-piscine-dans-le-finistere-3.png"
    }
  ];

  logs: string[] = [];

  toggleStatut(salle: any) {
    if (salle.statut === 'ouverte') {
      salle.statut = 'Fermée';
      salle.forcerClose = true;
      this.logs.push(`La ${salle.nom} a été fermée.`);
    } else {
      salle.statut = 'Ouverte';
      salle.forcerClose = false;
      this.logs.push(`La ${salle.nom} a été ouverte.`);
    }
  }
  formatTime(hour: number, minutes: number): string {
    return `${hour.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
  }
  
  updateStatusBasedOnTime(currentTime: Date) {
    const currentHour = currentTime.getHours();
    const currentMinutes = currentTime.getMinutes();

    this.salles.forEach(salle => {
      const ouverture = new Date();
      const fermeture = new Date();

      const ouvertureHour = parseInt(salle.ouverture.split(':')[0]);
      const ouvertureMinutes = parseInt(salle.ouverture.split(':')[1]);
      ouverture.setHours(ouvertureHour, ouvertureMinutes);

      const fermetureHour = parseInt(salle.fermeture.split(':')[0]);
      const fermetureMinutes = parseInt(salle.fermeture.split(':')[1]);
      fermeture.setHours(fermetureHour, fermetureMinutes);

      if (currentTime >= ouverture && currentTime <= fermeture && salle.forcerClose ===false) {
        if (salle.statut !== 'ouverte') { 
          salle.statut = 'ouverte';
          this.logs.push(`La ${salle.nom} a été ouverte automatiquement à ${this.formatTime(currentHour, currentMinutes)}.`);
        }
      } else {
        if (salle.statut !== 'fermée' && salle.forcerClose ===false) { 
          salle.statut = 'fermée';
          this.logs.push(`La ${salle.nom} a été fermée automatiquement à ${this.formatTime(currentHour, currentMinutes)}.`);
        }
      }
    });
  }

  checkStatusAfterThirtyMinutes() {
    const currentTime = new Date();
    this.updateStatusBasedOnTime(currentTime);
  }

}
