/*
  ARTICLES DE LA PAGE VEILLE
  --------------------------
  Pour ajouter un article : copie un bloc { ... } entier (avec la virgule finale),
  colle-le juste en dessous de la ligne "window.VEILLE_ARTICLES = [", puis modifie le texte.
  L'ordre n'a pas d'importance : la page trie les articles par date, du plus récent au plus ancien.

  Champs :
    titre    : titre de l'article
    source   : nom du site (IT-Connect, CERT-FR...)
    date     : AAAA-MM-JJ  (exemple : 2026-11-21)
    url      : lien de l'article (commence par https://)
    resume   : résumé en 2 à 4 phrases, avec tes mots
    interet  : ce que tu en retiens pour ton métier
  Facultatif :
    noteTexte + noteUrl : une ligne de plus avec un lien

  Attention : garde les guillemets " autour des textes, et n'écris pas de guillemet " à
  l'intérieur d'un texte (utilise « » ou ').
*/
window.VEILLE_ARTICLES = [
  {
    "titre": "Rapport rançongiciels d'octobre 2026 : 953 victimes, 81 groupes",
    "source": "Breachsense",
    "date": "2026-11-01",
    "url": "https://www.breachsense.com/ransomware-reports/october-2026/",
    "resume": "953 entreprises ont été revendiquées sur des sites de fuite en octobre 2026, soit 21 % de plus qu'en septembre. Les groupes les plus actifs sont TheGentlemen (135 victimes) et Qilin (110). La santé est le premier secteur touché pour le cinquième mois consécutif et les États-Unis concentrent 42,8 % des victimes.",
    "interet": "Les sauvegardes testées et le plan de continuité d'activité restent les premières protections contre un rançongiciel."
  },
  {
    "titre": "Patch Tuesday d'octobre 2026 : 1 407 failles corrigées, dont trois zero-day",
    "source": "IT-Connect",
    "date": "2026-10-14",
    "url": "https://www.it-connect.fr/patch-tuesday-octobre-2026-recapitulatif/",
    "resume": "Microsoft a corrigé 1 407 failles le 13 octobre 2026, dont trois zero-day. Windows Server est concerné : une faille critique d'exécution de code à distance touche les services de domaine Active Directory (CVE-2026-70229) et une faille de type use-after-free notée 9,8 touche le serveur DHCP (CVE-2026-96934). Les éditions Windows Server 2012 et 2012 R2 arrivent en fin de programme de mises à jour étendues.",
    "interet": "Active Directory et DHCP sont des services centraux : les correctifs doivent être testés puis déployés rapidement."
  },
  {
    "titre": "Avis de sécurité Proxmox PSA-2026-00036-1 « Zapscape »",
    "source": "Forum Proxmox",
    "date": "2026-08-10",
    "url": "https://forum.proxmox.com/threads/proxmox-virtual-environment-security-advisories.149331/post-853201",
    "resume": "Faille de l'hyperviseur KVM (CVE-2026-64561) permettant à une machine virtuelle invitée de s'échapper vers l'hôte, avec la virtualisation imbriquée sur x86_64. Elle est corrigée dans les noyaux proxmox-kernel 7.0.14-9-pve et 6.8.12-40-pve.",
    "interet": "Il faut mettre à jour le noyau de l'hôte, pas seulement les machines virtuelles."
  },
  {
    "titre": "Retard de NIS2 : l'Anssi en attente de ses pouvoirs de gendarme",
    "source": "Banque des Territoires",
    "date": "2026-07-09",
    "url": "https://www.banquedesterritoires.fr/retard-de-nis2-lanssi-en-attente-de-ses-pouvoirs-de-gendarme",
    "noteTexte": "Vérifier l'état de la transposition sur la page officielle de l'ANSSI.",
    "noteUrl": "https://cyber.gouv.fr/la-directive-nis-2",
    "resume": "La France n'avait pas transposé la directive NIS2 à l'échéance du 17 octobre 2024 et la Commission européenne a saisi la CJUE. L'ANSSI ne peut aujourd'hui réguler qu'environ 300 opérateurs d'importance vitale, contre environ 20 000 entités avec NIS2.",
    "interet": "NIS2 élargira les obligations de sécurité à de nombreuses organisations, dont des collectivités."
  },
  {
    "titre": "Multiples vulnérabilités dans les produits Cisco (CERTFR-2026-AVI-0772)",
    "source": "CERT-FR",
    "date": "2026-06-18",
    "url": "https://db.gcve.eu/vuln/certfr-2026-avi-0772",
    "resume": "Plusieurs failles dans Cisco Identity Services Engine (ISE et ISE-PIC) permettent l'exécution de code à distance. Cisco annonçait un correctif, la version 3.5 Patch 4, pour août 2026. Le lien mène à une copie de l'avis.",
    "interet": "Les équipements d'authentification réseau sont des cibles de choix : suivre les bulletins de l'éditeur."
  },
  {
    "titre": "Windows Server : la faille Netlogon CVE-2026-41089 est exploitée",
    "source": "IT-Connect",
    "date": "2026-06-02",
    "url": "https://www.it-connect.fr/windows-server-cve-2026-41089-cette-faille-critique-dans-netlogon-est-exploitee/",
    "resume": "Faille critique (CVSS 9,8) d'exécution de code à distance sans authentification, qui touche Windows Server 2012 à 2025. Le correctif est inclus dans les mises à jour cumulatives de mai 2026.",
    "interet": "Les contrôleurs de domaine doivent être mis à jour en priorité."
  }
];
