import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  salles = [
    {
      nom: "Salle à manger", ouverture: "08:00",
      fermeture: "22:00", statut: "ouverte", image: "https://static.wixstatic.com/media/9d6c92_906c424eb8594831935e601e6e0d8373~mv2.jpg/v1/fill/w_1034,h_528,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/FB_IMG_1678904500880(1).jpg"
    },
    {
      nom: "SDB", ouverture: "08:00",
      fermeture: "22:00", statut: "fermée", image: "https://media.licdn.com/dms/image/D5603AQGoKKMdNeTQ9A/profile-displayphoto-shrink_800_800/0/1690446623763?e=2147483647&v=beta&t=n8YkWiNesgx_62gRykoPI5xLCCUit1OXTjMkPH4ErcU"
    },
    {
      nom: "Garage", ouverture: "08:00",
      fermeture: "22:00", statut: "ouverte", image: "https://www.socoren.com/wp-content/uploads/2022/12/creation-maison-sur-mesure.jpg"
    },
    {
      nom: "PAC", ouverture: "08:00",
      fermeture: "22:00", statut: "fermée", image: "https://biograndest.org/wp-content/uploads/2020/04/illus_PAC.jpg"
    },
    {
      nom: "Buanderie", ouverture: "08:00",
      fermeture: "22:00", statut: "ouverte", image: "https://www.maisonapart.com/images/auto/640-480-c/20151012_171724_blob-idea-groupe-spazioevoluzione13.jpg"
    },
    {
      nom: "Piscine", ouverture: "08:00",
      fermeture: "22:00", statut: "fermée", image: "https://www.aquilus-piscines.com/wp-content/uploads/2021/12/petite-piscine-dans-le-finistere-3.png"
    }
  ];

  logs: string[] = [];

  toggleStatut(salle: any) {
    if (salle.statut === 'ouverte') {
      salle.statut = 'fermée';
      this.logs.push(`La ${salle.nom} a été fermée.`);
    } else {
      salle.statut = 'ouverte';
      this.logs.push(`La ${salle.nom} a été ouverte.`);
    }
  }
  formatTime(hour: number, minutes: number): string {
    return `${hour.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
  }
  
  updateStatusBasedOnTime(currentTime: Date) {
    const formattedTime = this.formatTime(currentTime.getHours(), currentTime.getMinutes());

    this.salles.forEach(salle => {
      if (salle.ouverture === formattedTime) {
        if (salle.statut !== 'ouverte') { // Vérifiez si le statut est déjà ouvert
          salle.statut = 'ouverte';
          this.logs.push(`La ${salle.nom} a été ouverte automatiquement à ${formattedTime}.`);
        }
      } else if (salle.fermeture === formattedTime) {
        if (salle.statut !== 'fermée') { // Vérifiez si le statut est déjà fermé
          salle.statut = 'fermée';
          this.logs.push(`La ${salle.nom} a été fermée automatiquement à ${formattedTime}.`);
        }
      }
    });
  }
}
