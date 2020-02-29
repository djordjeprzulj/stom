import { Component } from "@angular/core";
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Router } from "@angular/router";

@Component({
  selector: "app-nav-bar",
  templateUrl: "./nav-bar.component.html",
  styleUrls: ["./nav-bar.component.css"]
})
export class NavBarComponent {
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map(result => result.matches));

  constructor(
    private router: Router,
    private breakpointObserver: BreakpointObserver
  ) {}
  config = {
    interfaceWithRoute: true,
    selectedListFontColor: '#F6D55C',
    fontColor: 'rgb(255,255,255)'
  };
  appitems = [
    {
      label: "Evidencija",
      icon: "assignment",
      items: [
        {
          label: "Ordinacija",
          link: "/ordinacija"
        },
        {
          label: "Slika",
          link: "/slika"
        },
        {
          label: "Status",
          link: "/status"
        },
        {
          label: "Vrsta intervencije",
          link: "/vrstaIntervencije"
        },
        {
          label: "Grupa intervencija",
          link: "/grupaIntervencija"
        }
      ]
    },
    {
      label: "Pacijenti",
      icon: "people_outline",
      items: [
        {
          label: "Izvršena intervencija",
          link: "/izvrsenaIntervencija"
        },
        {
          label: "Dijagnoza",
          link: "/dijagnoza"
        },
        {
          label: "Pacijent",
          link: "/pacijent"
        },
        {
          label: "Račun",
          link: "/racun"
        },
        {
          label: "Snimak",
          link: "/snimak"
        }
      ]
    },
    {
      label: "Zaposleni",
      icon: "person",
      items: [
        {
          label: "Plan rada",
          link: "/planRada"
        },
        {
          label: "Zaposleni",
          link: "/zaposleni"
        },
        {
          label: "Isplata",
          link: "/isplata"
        },
        {
          label: "Struka",
          link: "/struka"
        },
        {
          label: "Radno mesto",
          link: "/radnoMesto"
        }
      ]
    },
    {
      label: "Kalendar",
      link: "/kalendar",
      icon: "calendar_today"
    },
    {
      label: "Komercijala",
      items: [
        {
          label: "Artikl",
          link: "/artikl"
        },
        {
          label: "Materijal",
          link: "/materijal"
        },
        {
          label: "Dobavljač",
          link: "/dobavljac"
        },
        {
          label: "Porudžbina",
          link: "/porudzbina"
        }
      ],
      icon: "work"
    },
    {
      label: 'Izvestaji',
      icon: "chrome_reader_mode",
      items: [
        {
          label: 'Kvartalni Izvestaj',
          link: 'kvartalniIzvestaj'
        }
      ]
    },
    {
      label: 'Auditing', 
      icon: 'visibility',
      items: [
        {
          label: 'Auditing Izvrsenih Intervencija',
          link: 'auditing-intervencija'
        }
      ]
    },
    {
      label: 'Odjava',
      link: '/logout',
      icon: 'close'
    }
  ];
}
