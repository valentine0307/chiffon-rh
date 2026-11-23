/* Profils synthétiques fournis par l'annexe 2 : aucune identité réelle. */
window.DEMO = [
['Chargé(e) de recrutement — junior','Master psychologie du travail ; 18 mois agence intérim. Sourcing LinkedIn, CVthèques, préqualification téléphonique, organisation des entretiens, reporting recrutement, anglais, espagnol.'],
['Gestionnaire de paie — confirmé(e)','Bachelor paie et social. Plus de 5 ans en multi-conventions. SAGE, bulletins de paie, DSN, absences, congés, charges sociales, droit du travail, veille réglementaire. Intérêt pour le recrutement.'],
['Responsable ressources humaines — PME','10 ans comme RRH généraliste, master RH en cours. Conseil aux managers, recrutement, onboarding, gestion de la formation, dialogue social, CSE, administration du personnel, gestion des talents.'],
['Assistant(e) RH — débutant(e)','Bachelor RH obtenu en 2025. Classement, archivage, dossiers du personnel, accueil, onboarding, soutien aux campagnes de recrutement, suivi des absences.'],
['Consultant(e) RH — cabinet','3 ans en cabinet, conseil RH, audits sociaux, plans de formation, recrutement, conduite d’entretien, fiches de poste, reporting RH, accompagnement TPE PME.'],
['Responsable formation — senior','12 ans en formation. CPF, plan de développement des compétences, OPCO, GEPP, ingénierie pédagogique, dossiers de financement, budget, animation de formations, évaluation des actions de formation.'],
['Chargé(e) de missions RH — polyvalent(e)','4 ans généraliste RH. Licence en droit du travail, suivi administratif, paie, relations sociales, IRP, campagnes de recrutement, entretiens annuels, formation, ADP, TalentSoft.'],
['Talent acquisition specialist — tech','Doctorat innovation RH en cours, première expérience recherchée. Sourcing LinkedIn, GitHub, marque employeur, entretiens techniques, SmartRecruiters, Lever, KPI recrutement, profils IT.'],
['Responsable relations sociales','8 ans relations sociales. Licence droit du travail. Dialogue social, CSE, négociation accords collectifs, droit du travail, gestion de conflits, confidentialité.'],
['Chargé(e) de mobilité internationale','8 ans dans un groupe international. Visas, permis de travail, fiscalité internationale, expatriations, détachements, mobilité, prestataires, conformité légale, recrutements internationaux.'],
['Chargé(e) diversité et inclusion','Bachelor QSE 2025. Politique diversité, inclusion, RSE, égalité des chances, parité, indicateurs RSE, sensibilisation, formation, partenariats, communication interne.'],
['Responsable administration du personnel','8 ans administration RH et management équipe paie. Contrats, avenants, audits internes RH, disciplinaire, SAP HR, ADP, conformité des processus, paie.'],
['HR Business Partner — international','6 ans dans un groupe industriel international, RNCP 7 RRH. Projets RH, conduite du changement, suivi des performances, organisation du travail, communication RH, conseil managers.'],
['Responsable SIRH','10 ans SIRH. Digitalisation des processus RH dans une entreprise de 1000 collaborateurs. Workday, SuccessFactors, projets SIRH, cahiers des charges, recette, formation utilisateurs, automatisation RH.'],
['Chargé(e) de QVCT','Spécialiste QVCT, diplôme QVCT et certification gestion émotionnelle. Enquêtes de satisfaction, ateliers bien-être, télétravail, RPS, risques psychosociaux, prévention, médiation.']
].map((p,i)=>({id:'demo-'+i,name:p[0],text:p[1],demo:true}));

window.JOBS={
'SIRH & digitalisation RH':[
['Projets SIRH','sirh,workday,successfactors,sap hr,talentsoft',5,true,'Décrivez une mise en place de SIRH et les indicateurs de succès.'],
['Automatisation RH','automatisation,digitalisation,processus rh,process rh',5,true,'Quel processus papier automatiseriez-vous en priorité chez CHIFFON ?'],
['Conduite de projet','projets,projet,cahier des charges,recette',4,false,'Comment sécurisez-vous la recette et les délais d’un projet RH ?'],
['Formation utilisateurs','formation utilisateurs,accompagnement au changement,conduite du changement',3,false,'Comment accompagneriez-vous 450 salariés dans l’adoption d’un nouvel outil ?'],
['Administration RH','administration du personnel,adp,paie,contrats',2,false,'Comment relier SIRH et conformité des données du personnel ?'] ],
'Recrutement & marque employeur':[
['Sourcing','sourcing,linkedin,cvthèques,github,chasse',5,true,'Quelle stratégie de sourcing pour des profils logistique et production ?'],
['Entretiens','entretiens,entretien,préqualification,conduite d’entretien',5,true,'Comment conduiriez-vous un entretien structuré et équitable ?'],
['Reporting recrutement','reporting,kpi,indicateurs',3,false,'Quels indicateurs suivriez-vous pour améliorer les recrutements ?'],
['Marque employeur','marque employeur,communication rh,communication interne',3,false,'Comment valoriser la fabrication française de CHIFFON ?'],
['Onboarding','onboarding,accueil,intégration',3,false,'Quel parcours d’intégration proposeriez-vous sur 30 jours ?'] ],
'Formation & développement des compétences':[
['Plan de développement','plan de développement des compétences,plans de formation,formation',5,true,'Comment construiriez-vous un plan de compétences à partir des besoins métier ?'],
['Ingénierie pédagogique','ingénierie pédagogique,animation de formations,formation utilisateurs',4,false,'Comment former des équipes atelier ayant peu accès au numérique ?'],
['Budget et financement','opco,cpf,financement,budget',4,false,'Quels financements mobiliseriez-vous et comment les piloter ?'],
['Évaluation','évaluation,entretiens annuels,indicateurs',3,false,'Comment mesurer l’effet des formations sur le travail ?'],
['GEPP','gepp,mobilité,gestion des talents',3,false,'Comment favoriseriez-vous la mobilité interne ?'] ],
'Relations sociales & conformité':[
['Droit du travail','droit du travail,conformité légale,veille réglementaire',5,true,'Comment garantir la conformité des pratiques RH ?'],
['Dialogue social','dialogue social,cse,irp,relations sociales',5,true,'Comment prépareriez-vous les échanges avec le CSE ?'],
['Négociation','négociation,accords collectifs,gestion de conflits',3,false,'Décrivez une négociation sociale délicate.'],
['Administration du personnel','administration du personnel,adp,contrats,avenants',3,false,'Quels contrôles mettriez-vous en place ?'],
['Prévention','qvct,rps,prévention,risques psychosociaux',3,false,'Comment articuler relations sociales et prévention ?'] ],
'QVCT & prévention des RPS':[
['Prévention RPS','rps,risques psychosociaux,prévention',5,true,'Comment établiriez-vous un diagnostic RPS ?'],
['Démarche QVCT','qvct,qualité de vie,bien-être',5,true,'Quel plan QVCT lanceriez-vous en fabrication et logistique ?'],
['Enquêtes et mesure','enquêtes,indicateurs,évaluation',3,false,'Quels indicateurs démontrent l’amélioration de la QVCT ?'],
['Relations sociales','cse,relations sociales,dialogue social',2,false,'Comment associeriez-vous le CSE à la démarche ?'],
['Accompagnement','médiation,formation,ateliers',3,false,'Comment traiter une situation de tension entre un salarié et son manager ?'] ],
'Administration RH & paie':[
['Gestion de la paie','paie,bulletins,dsn,sage',5,true,'Comment sécurisez-vous une paie multi-conventions ?'],
['Administration du personnel','administration du personnel,adp,dossiers du personnel,contrats',5,true,'Comment fiabiliser les dossiers et les flux de documents ?'],
['Conformité','droit du travail,conformité,veille réglementaire',3,false,'Quels contrôles réglementaires réalisez-vous régulièrement ?'],
['Digitalisation','sirh,automatisation,digitalisation,sap hr,adp',3,false,'Quels flux papier numériseriez-vous en premier ?'],
['Suivi absences','absences,congés,ds n',2,false,'Comment vérifier la fiabilité des éléments variables de paie ?'] ]
};
