import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.scss']
})
export class MenuLateralComponent {
  @Input() isMenuOpen = false;
  sections = [
    {
      image:'../../assets/listeDossiers.png',
      title: 'Liste des dossiers',
      isOpen: false,
      subSections: ['• Dossiers en instance', '• Dossiers validés pas encore affectés','• Dossiers en cours d\'exécution','• Dossiers ouverts']
    },
    {
      image:'../../assets/ListeDs.png',
      title: 'Liste des demandes de services ',
      isOpen: false,
      subSections: ['• Liste des demandes de services pas encore règlées', '• Liste des demandes de services règlées','• Liste des demandes de services marquées comme payées','• Liste des factures performat générées','• Liste des factures règlées']
    },
    {
      image:'../../assets/moduleRecouvrement.png',
      title: 'Module recouvrement',
      isOpen: false,
      subSections: ['• Liste des clients avec des impayés']
    },
    {
      image:'../../assets/listeUtilisateur.png',
      title: 'Liste des utilisateurs',
      isOpen: false,
      subSections: ['• Tous les utilisateurs',
        '• Utilisateurs connectés',
        '• Clients actifs',
        '• Clients bloqués',
        '• Clients supprimés temporairement',
        '• Collaborateurs',
        '• Consultants',
        '• Candidats'   ]
    },
    {
      image:'../../assets/listeDf.png',
      title: 'Liste des déclarations fiscales',
      isOpen: false,
      subSections: ['• Déclarations fiscales validés',
        '• Déclarations fiscales en cours d\'execution',
        '• Copies déclarations fiscales validés']
    },
    {
      image:'../../assets/listeFc.png',
      title: 'Liste des fichiers comptables',
      isOpen: false,
      subSections: ['• Fichiers comptables validés','• Fichiers comptables en cours d\'execution',
'• Copies fichiers comptables validés']
    },
    {
      image:'../../assets/listeCandidat.png',
      title:'Liste des candidatures',
      isOpen:false,
      subSections:['• Liste des candidatures validés','• Liste des candidatures en cours d\'exécution']
    }
    ,
    {
      image:'../../assets/listeReclamations.png',
      title: 'Liste des réclamations',
      isOpen: false,
      subSections: ['• Réclamations traités', '• Réclamations en cours d\'execution']
    },
    {
      image:'../../assets/statistiques.png',
      title: 'Statistiques générales',
      isOpen: false,
      subSections: ['• Statistiques détaillées', '• Statistiques dernier mois','• Statistiques dernier jour','• Liste des transactions']
    }
  ];

  toggleSidebar() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  toggleSection(section: any) {
    this.sections.forEach(s => {
      if (s !== section) {
        s.isOpen = false;
      }
    });
    section.isOpen = !section.isOpen;
  }

  getRouterLink(subSection: string): string {
    return `/${subSection}`;
  }

  clickedOutsideMenu():void{
    this.isMenuOpen=false;
  }
}