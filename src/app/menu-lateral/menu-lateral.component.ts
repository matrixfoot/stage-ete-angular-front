import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.scss']
})
export class MenuLateralComponent {
  isMenuOpen = false;
  sections = [
    {
      title: 'Liste des dossiers',
      isOpen: false,
      subSections: ['• Dossiers en instance', '• Dossiers validés pas encore affectés','• Dossiers en cours d\'exécution','• Dossiers ouverts']
    },
    {
      title: 'Liste des demandes de services ',
      isOpen: false,
      subSections: ['• Liste des demandes de services pas encore règlées', '• Liste des demandes de services règlées','• Liste des demandes de services marquées comme règlées','• Liste des factures proformat générées','• Liste des factures règlées']
    },
    {
      title: 'Module recouvrement',
      isOpen: false,
      subSections: ['• Liste des clients avec des impayés']
    },
    {
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
      title: 'Liste des déclarations fiscales',
      isOpen: false,
      subSections: ['• Déclarations fiscales validés',
        '• Déclarations fiscales en cours d\'execution',
        '• Copies déclarations fiscales validés']
    },
    {
      title: 'Liste des fichiers comptables',
      isOpen: false,
      subSections: ['• Fichiers comptables validés','• Fichiers comptables en cours d\'execution',
'• Copies fichiers comptables validés']
    },
    {
      title: 'Liste des réclamations',
      isOpen: false,
      subSections: ['• Réclamations traités', '• Réclamations en cours d\'execution']
    },
    {
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
}