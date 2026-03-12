const privacyTranslations = {

fr: `<h1>POLITIQUE DE CONFIDENTIALITE — BISK8</h1>
<p><strong>Derniere mise a jour : 12 mars 2026</strong></p>
<hr/>
<h2>1. INTRODUCTION</h2>
<p>La presente Politique de Confidentialite decrit comment BISK8 collecte, utilise, stocke et protege vos donnees personnelles lorsque vous utilisez notre application mobile (ci-apres « l'Application »).</p>
<p><strong>Responsable du traitement :</strong><br/>BISK8<br/>Barcelos, Portugal<br/>Email : contact@bisk8.co</p>
<p>BISK8 s'engage a proteger votre vie privee conformement au Reglement General sur la Protection des Donnees (RGPD — Reglement UE 2016/679), a la nouvelle loi federale suisse sur la protection des donnees (nLPD) et a la loi portugaise de protection des donnees personnelles (Lei n.58/2019).</p>
<hr/>
<h2>2. DONNEES COLLECTEES</h2>
<h3>2.1 Donnees fournies par l'utilisateur</h3>
<table>
<thead><tr><th>Donnee</th><th>Finalite</th><th>Base legale</th></tr></thead>
<tbody>
<tr><td>Adresse email</td><td>Creation de compte, communication</td><td>Execution du contrat</td></tr>
<tr><td>Prenom</td><td>Personnalisation de l'experience</td><td>Execution du contrat</td></tr>
<tr><td>Genre</td><td>Personnalisation du contenu (avatar, suggestions)</td><td>Execution du contrat</td></tr>
<tr><td>Date de naissance</td><td>Affichage de l'age, verification age minimum</td><td>Interet legitime</td></tr>
<tr><td>Taille (cm)</td><td>Calibrage de l'avatar IA et des proportions</td><td>Execution du contrat</td></tr>
<tr><td>Tailles vestimentaires</td><td>Fonctionnalite "Mes Tailles" et recommandations</td><td>Execution du contrat</td></tr>
<tr><td>Photos de vetements</td><td>Numerisation de la garde-robe</td><td>Execution du contrat</td></tr>
<tr><td>Photos selfie et corps entier</td><td>Generation de l'avatar IA</td><td>Consentement explicite</td></tr>
</tbody>
</table>
<h3>2.2 Donnees generees par le service</h3>
<table>
<thead><tr><th>Donnee</th><th>Finalite</th></tr></thead>
<tbody>
<tr><td>Images de vetements regenerees par IA</td><td>Affichage dans le dressing virtuel</td></tr>
<tr><td>Images de looks composites</td><td>Visualisation des tenues</td></tr>
<tr><td>Avatar IA genere</td><td>Creation de looks realistes</td></tr>
<tr><td>Donnees de proportions corporelles (JSONB)</td><td>Calibrage de l'avatar</td></tr>
<tr><td>Historique de port des vetements</td><td>Statistiques et rotation</td></tr>
<tr><td>Looks et planning</td><td>Fonctionnalite de planification</td></tr>
<tr><td>Donnees de voyage (destination, dates, participants, vetements)</td><td>Fonctionnalite valise virtuelle</td></tr>
</tbody>
</table>
<h3>2.3 Donnees collectees automatiquement</h3>
<table>
<thead><tr><th>Donnee</th><th>Finalite</th></tr></thead>
<tbody>
<tr><td>Geolocalisation (si autorisee)</td><td>Affichage de la meteo locale</td></tr>
<tr><td>Langue du telephone</td><td>Detection automatique de la langue</td></tr>
<tr><td>Type d'appareil et systeme d'exploitation</td><td>Compatibilite et debogage</td></tr>
</tbody>
</table>
<h3>2.4 Donnees NON collectees</h3>
<p>BISK8 ne collecte PAS :</p>
<ul>
<li>Vos contacts telephoniques</li>
<li>Vos messages ou communications</li>
<li>Votre historique de navigation internet</li>
<li>Vos donnees financieres (les paiements sont geres par Apple/Google)</li>
<li>Vos donnees biometriques (les photos sont traitees puis supprimees, voir section 3)</li>
</ul>
<hr/>
<h2>3. TRAITEMENT DES PHOTOS — POINT CRITIQUE</h2>
<h3>3.1 Photos de vetements</h3>
<p>Les photos de vetements telechargees par l'utilisateur sont :</p>
<ol>
<li>Envoyees a nos serveurs pour traitement par intelligence artificielle</li>
<li>Analysees pour determiner la categorie, la couleur et le style du vetement</li>
<li>Regenerees en image produit de qualite professionnelle</li>
<li>Stockees dans notre infrastructure cloud sous forme d'image regeneree</li>
<li>La photo originale n'est PAS conservee apres traitement — seule l'image regeneree est stockee</li>
</ol>
<h3>3.2 Photos selfie et corps entier (Avatar IA)</h3>
<p><strong>Traitement sensible — consentement explicite requis</strong></p>
<p>Les photos selfie et corps entier fournies pour la creation de l'avatar IA sont :</p>
<ol>
<li>Telechargees sur nos serveurs securises</li>
<li>Utilisees pour generer un avatar IA realiste de l'utilisateur</li>
<li>Stockees de maniere securisee dans un bucket prive pour permettre la generation de looks</li>
</ol>
<p><strong>ENGAGEMENT DE CONFIDENTIALITE ABSOLUE :</strong></p>
<ul>
<li><strong>Aucun employe, administrateur ou prestataire de BISK8 n'a acces aux photos personnelles des utilisateurs.</strong> Les photos sont stockees dans des buckets prives proteges par des politiques de securite au niveau des lignes (Row Level Security).</li>
<li><strong>Les photos ne sont jamais visualisees, moderees ou analysees par un humain.</strong> Tout le traitement est effectue de maniere automatisee par les systemes d'intelligence artificielle.</li>
<li><strong>Les photos ne sont jamais partagees, vendues, louees ou transferees a des tiers.</strong></li>
<li><strong>Les photos ne sont jamais utilisees pour entrainer des modeles d'IA.</strong></li>
</ul>
<p>L'utilisateur peut a tout moment visualiser ses photos, les remplacer, ou supprimer son avatar (ce qui entraine la suppression de toutes les photos associees).</p>
<hr/>
<h2>4. SOUS-TRAITANTS ET TRANSFERTS DE DONNEES</h2>
<p>BISK8 utilise les sous-traitants suivants :</p>
<table>
<thead><tr><th>Sous-traitant</th><th>Pays</th><th>Finalite</th><th>Donnees traitees</th></tr></thead>
<tbody>
<tr><td><strong>Supabase</strong></td><td>UE (Francfort)</td><td>Hebergement, stockage, authentification</td><td>Toutes les donnees utilisateur</td></tr>
<tr><td><strong>Google (Gemini API)</strong></td><td>USA</td><td>Generation d'images par IA</td><td>Photos de vetements, photos avatar</td></tr>
<tr><td><strong>Anthropic (Claude API)</strong></td><td>USA</td><td>Classification des vetements par IA</td><td>Photos de vetements</td></tr>
<tr><td><strong>OpenWeatherMap</strong></td><td>UK</td><td>Donnees meteo</td><td>Coordonnees GPS</td></tr>
<tr><td><strong>Apple / Google</strong></td><td>USA</td><td>Gestion des paiements</td><td>Donnees de facturation</td></tr>
<tr><td><strong>RevenueCat</strong></td><td>USA</td><td>Gestion des abonnements</td><td>Identifiant utilisateur, statut abonnement</td></tr>
<tr><td><strong>Firebase (FCM)</strong></td><td>USA</td><td>Notifications push</td><td>Token de notification</td></tr>
</tbody>
</table>
<h3>4.1 Transferts hors UE</h3>
<p>Certains sous-traitants sont situes aux Etats-Unis. Ces transferts sont encadres par les Clauses Contractuelles Types (CCT), le Data Privacy Framework UE-USA, et des mesures techniques complementaires.</p>
<hr/>
<h2>5. DUREE DE CONSERVATION</h2>
<table>
<thead><tr><th>Donnee</th><th>Duree de conservation</th></tr></thead>
<tbody>
<tr><td>Donnees de compte</td><td>Jusqu'a la suppression du compte</td></tr>
<tr><td>Photos de vetements regenerees</td><td>Jusqu'a la suppression du vetement ou du compte</td></tr>
<tr><td>Photos selfie et corps entier</td><td>Jusqu'a la suppression de l'avatar ou du compte</td></tr>
<tr><td>Avatar IA genere</td><td>Jusqu'a la suppression de l'avatar ou du compte</td></tr>
<tr><td>Looks et planning</td><td>Jusqu'a la suppression du look ou du compte</td></tr>
<tr><td>Donnees de voyage</td><td>Jusqu'a la suppression du voyage ou du compte</td></tr>
<tr><td>Donnees de geolocalisation</td><td>Non stockees (cache local de 30 minutes)</td></tr>
<tr><td>Logs techniques</td><td>90 jours maximum</td></tr>
</tbody>
</table>
<hr/>
<h2>6. SECURITE DES DONNEES</h2>
<p>BISK8 met en oeuvre les mesures de securite suivantes :</p>
<ul>
<li><strong>Chiffrement en transit :</strong> TLS 1.2+</li>
<li><strong>Chiffrement au repos :</strong> donnees chiffrees sur les serveurs Supabase</li>
<li><strong>Isolation des donnees :</strong> Row Level Security</li>
<li><strong>Acces couple/famille :</strong> permissions explicites uniquement</li>
<li><strong>Authentification securisee :</strong> email, Google et Apple Sign-In</li>
<li><strong>Suppression securisee :</strong> effective et verifiable</li>
</ul>
<hr/>
<h2>7. VOS DROITS</h2>
<p>Conformement au RGPD et a la nLPD, vous disposez des droits suivants :</p>
<ul>
<li><strong>Droit d'acces :</strong> demander une copie de vos donnees personnelles</li>
<li><strong>Droit de rectification :</strong> modifier vos donnees depuis les parametres</li>
<li><strong>Droit a l'effacement :</strong> supprimer votre compte et toutes vos donnees</li>
<li><strong>Droit a la portabilite :</strong> exporter vos donnees en JSON</li>
<li><strong>Droit d'opposition et de limitation</strong></li>
<li><strong>Droit de retirer le consentement</strong></li>
<li><strong>Droit de reclamation</strong> aupres d'une autorite de controle (CNPD, CNIL, PFPDT)</li>
</ul>
<p>Contact : <strong>contact@bisk8.co</strong> — Reponse sous 30 jours.</p>
<hr/>
<h2>8. COOKIES ET TECHNOLOGIES SIMILAIRES</h2>
<p>L'Application mobile BISK8 n'utilise pas de cookies. Nous utilisons uniquement le stockage local du telephone (SharedPreferences) pour memoriser vos preferences et conserver votre session.</p>
<hr/>
<h2>9. PUBLICITE ET MONETISATION DES DONNEES</h2>
<p><strong>BISK8 ne diffuse aucune publicite dans l'Application.</strong></p>
<p><strong>BISK8 ne vend, ne loue et ne partage aucune donnee personnelle a des tiers a des fins publicitaires ou commerciales.</strong></p>
<hr/>
<h2>10. PROTECTION DES MINEURS</h2>
<p>L'Application est destinee aux personnes de 13 ans ou plus. Les profils enfants dans le cadre du plan Famille sont entierement geres par les parents. Si un enfant de moins de 13 ans cree un compte sans consentement parental, nous le supprimerons immediatement.</p>
<hr/>
<h2>11. MODIFICATIONS DE LA POLITIQUE</h2>
<p>BISK8 se reserve le droit de modifier la presente Politique. En cas de modification substantielle, les utilisateurs seront informes au moins 30 jours avant l'entree en vigueur.</p>
<hr/>
<h2>12. CONTACT</h2>
<p>Pour toute question relative a la protection de vos donnees personnelles :</p>
<p><strong>BISK8 — Protection des donnees</strong><br/>Cristiano Vilas Boas<br/>Barcelos, Portugal<br/>Email : contact@bisk8.co</p>
<p>Nous nous engageons a traiter votre demande dans un delai maximum de 30 jours.</p>`,

en: `<h1>PRIVACY POLICY — BISK8</h1>
<p><strong>Last updated: March 12, 2026</strong></p>
<hr/>
<h2>1. INTRODUCTION</h2>
<p>This Privacy Policy describes how BISK8 collects, uses, stores and protects your personal data when you use our mobile application (hereinafter "the Application").</p>
<p><strong>Data Controller:</strong><br/>BISK8<br/>Barcelos, Portugal<br/>Email: contact@bisk8.co</p>
<p>BISK8 is committed to protecting your privacy in accordance with the General Data Protection Regulation (GDPR — EU Regulation 2016/679), the new Swiss Federal Act on Data Protection (nFADP) and the Portuguese Data Protection Act (Lei n.58/2019).</p>
<hr/>
<h2>2. DATA COLLECTED</h2>
<h3>2.1 Data provided by the user</h3>
<table>
<thead><tr><th>Data</th><th>Purpose</th><th>Legal basis</th></tr></thead>
<tbody>
<tr><td>Email address</td><td>Account creation, communication</td><td>Contract performance</td></tr>
<tr><td>First name</td><td>Experience personalization</td><td>Contract performance</td></tr>
<tr><td>Gender</td><td>Content personalization (avatar, suggestions)</td><td>Contract performance</td></tr>
<tr><td>Date of birth</td><td>Age display, minimum age verification</td><td>Legitimate interest</td></tr>
<tr><td>Height (cm)</td><td>AI avatar and proportion calibration</td><td>Contract performance</td></tr>
<tr><td>Clothing sizes</td><td>"My Sizes" feature and recommendations</td><td>Contract performance</td></tr>
<tr><td>Garment photos</td><td>Wardrobe digitization</td><td>Contract performance</td></tr>
<tr><td>Selfie and full-body photos</td><td>AI avatar generation</td><td>Explicit consent</td></tr>
</tbody>
</table>
<h3>2.2 Data generated by the service</h3>
<table>
<thead><tr><th>Data</th><th>Purpose</th></tr></thead>
<tbody>
<tr><td>AI-regenerated garment images</td><td>Display in virtual wardrobe</td></tr>
<tr><td>Composite look images</td><td>Outfit visualization</td></tr>
<tr><td>Generated AI avatar</td><td>Realistic look creation</td></tr>
<tr><td>Body proportion data (JSONB)</td><td>Avatar calibration</td></tr>
<tr><td>Garment wear history</td><td>Statistics and rotation</td></tr>
<tr><td>Looks and planning</td><td>Planning feature</td></tr>
<tr><td>Travel data (destination, dates, participants, garments)</td><td>Virtual suitcase feature</td></tr>
</tbody>
</table>
<h3>2.3 Automatically collected data</h3>
<table>
<thead><tr><th>Data</th><th>Purpose</th></tr></thead>
<tbody>
<tr><td>Geolocation (if authorized)</td><td>Local weather display</td></tr>
<tr><td>Phone language</td><td>Automatic language detection</td></tr>
<tr><td>Device type and operating system</td><td>Compatibility and debugging</td></tr>
</tbody>
</table>
<h3>2.4 Data NOT collected</h3>
<p>BISK8 does NOT collect:</p>
<ul>
<li>Your phone contacts</li>
<li>Your messages or communications</li>
<li>Your internet browsing history</li>
<li>Your financial data (payments are managed by Apple/Google)</li>
<li>Your biometric data (photos are processed then deleted, see section 3)</li>
</ul>
<hr/>
<h2>3. PHOTO PROCESSING — CRITICAL POINT</h2>
<h3>3.1 Garment photos</h3>
<p>Garment photos uploaded by the user are:</p>
<ol>
<li>Sent to our servers for AI processing</li>
<li>Analyzed to determine the category, color and style of the garment</li>
<li>Regenerated into professional quality product images</li>
<li>Stored in our cloud infrastructure as regenerated images</li>
<li>The original photo is NOT kept after processing — only the regenerated image is stored</li>
</ol>
<h3>3.2 Selfie and full-body photos (AI Avatar)</h3>
<p><strong>Sensitive processing — explicit consent required</strong></p>
<p><strong>ABSOLUTE CONFIDENTIALITY COMMITMENT:</strong></p>
<ul>
<li><strong>No employee, administrator or contractor of BISK8 has access to users' personal photos.</strong> Photos are stored in private buckets protected by Row Level Security policies.</li>
<li><strong>Photos are never viewed, moderated or analyzed by a human.</strong> All processing is automated by AI systems.</li>
<li><strong>Photos are never shared, sold, rented or transferred to third parties.</strong></li>
<li><strong>Photos are never used to train AI models.</strong></li>
</ul>
<hr/>
<h2>4. SUBPROCESSORS AND DATA TRANSFERS</h2>
<table>
<thead><tr><th>Subprocessor</th><th>Country</th><th>Purpose</th><th>Data processed</th></tr></thead>
<tbody>
<tr><td><strong>Supabase</strong></td><td>EU (Frankfurt)</td><td>Hosting, storage, authentication</td><td>All user data</td></tr>
<tr><td><strong>Google (Gemini API)</strong></td><td>USA</td><td>AI image generation</td><td>Garment photos, avatar photos</td></tr>
<tr><td><strong>Anthropic (Claude API)</strong></td><td>USA</td><td>AI garment classification</td><td>Garment photos</td></tr>
<tr><td><strong>OpenWeatherMap</strong></td><td>UK</td><td>Weather data</td><td>GPS coordinates</td></tr>
<tr><td><strong>Apple / Google</strong></td><td>USA</td><td>Payment management</td><td>Billing data</td></tr>
<tr><td><strong>RevenueCat</strong></td><td>USA</td><td>Subscription management</td><td>User ID, subscription status</td></tr>
<tr><td><strong>Firebase (FCM)</strong></td><td>USA</td><td>Push notifications</td><td>Notification token</td></tr>
</tbody>
</table>
<h3>4.1 Transfers outside the EU</h3>
<p>Some subprocessors are located in the United States. These transfers are governed by Standard Contractual Clauses (SCCs), the EU-US Data Privacy Framework, and supplementary technical measures.</p>
<hr/>
<h2>5. DATA RETENTION</h2>
<table>
<thead><tr><th>Data</th><th>Retention period</th></tr></thead>
<tbody>
<tr><td>Account data</td><td>Until account deletion</td></tr>
<tr><td>Regenerated garment photos</td><td>Until garment or account deletion</td></tr>
<tr><td>Selfie and full-body photos</td><td>Until avatar or account deletion</td></tr>
<tr><td>Generated AI avatar</td><td>Until avatar or account deletion</td></tr>
<tr><td>Looks and planning</td><td>Until look or account deletion</td></tr>
<tr><td>Travel data</td><td>Until trip or account deletion</td></tr>
<tr><td>Geolocation data</td><td>Not stored (30-minute local cache)</td></tr>
<tr><td>Technical logs</td><td>90 days maximum</td></tr>
</tbody>
</table>
<hr/>
<h2>6. DATA SECURITY</h2>
<ul>
<li><strong>Encryption in transit:</strong> TLS 1.2+</li>
<li><strong>Encryption at rest:</strong> encrypted on Supabase servers</li>
<li><strong>Data isolation:</strong> Row Level Security</li>
<li><strong>Couple/family access:</strong> explicit permissions only</li>
<li><strong>Secure authentication:</strong> email, Google and Apple Sign-In</li>
<li><strong>Secure deletion:</strong> effective and verifiable</li>
</ul>
<hr/>
<h2>7. YOUR RIGHTS</h2>
<p>Under the GDPR and nFADP, you have the following rights:</p>
<ul>
<li><strong>Right of access:</strong> request a copy of your personal data</li>
<li><strong>Right to rectification:</strong> modify your data from the settings</li>
<li><strong>Right to erasure:</strong> delete your account and all your data</li>
<li><strong>Right to portability:</strong> export your data in JSON format</li>
<li><strong>Right to object and restrict processing</strong></li>
<li><strong>Right to withdraw consent</strong></li>
<li><strong>Right to lodge a complaint</strong> with a supervisory authority</li>
</ul>
<p>Contact: <strong>contact@bisk8.co</strong> — Response within 30 days.</p>
<hr/>
<h2>8. COOKIES AND SIMILAR TECHNOLOGIES</h2>
<p>The BISK8 mobile Application does not use cookies. We only use local phone storage (SharedPreferences) to remember your preferences and maintain your session.</p>
<hr/>
<h2>9. ADVERTISING AND DATA MONETIZATION</h2>
<p><strong>BISK8 does not display any advertising in the Application.</strong></p>
<p><strong>BISK8 does not sell, rent or share any personal data with third parties for advertising or commercial purposes.</strong></p>
<hr/>
<h2>10. PROTECTION OF MINORS</h2>
<p>The Application is intended for persons aged 13 or older. Child profiles under the Family plan are fully managed by parents. If a child under 13 creates an account without parental consent, we will immediately delete it.</p>
<hr/>
<h2>11. POLICY CHANGES</h2>
<p>BISK8 reserves the right to modify this Policy. In case of substantial changes, users will be informed at least 30 days before they take effect.</p>
<hr/>
<h2>12. CONTACT</h2>
<p>For any questions regarding the protection of your personal data:</p>
<p><strong>BISK8 — Data Protection</strong><br/>Cristiano Vilas Boas<br/>Barcelos, Portugal<br/>Email: contact@bisk8.co</p>
<p>We commit to processing your request within a maximum of 30 days.</p>`,

de: `<h1>DATENSCHUTZRICHTLINIE — BISK8</h1>
<p><strong>Letzte Aktualisierung: 12. Marz 2026</strong></p>
<hr/>
<h2>1. EINLEITUNG</h2>
<p>Diese Datenschutzrichtlinie beschreibt, wie BISK8 Ihre personlichen Daten erfasst, verwendet, speichert und schutzt, wenn Sie unsere mobile Anwendung nutzen.</p>
<p><strong>Verantwortlicher:</strong><br/>BISK8<br/>Barcelos, Portugal<br/>E-Mail: contact@bisk8.co</p>
<p>BISK8 verpflichtet sich, Ihre Privatsphare in Ubereinstimmung mit der DSGVO (EU-Verordnung 2016/679), dem neuen Schweizer Datenschutzgesetz (nDSG) und dem portugiesischen Datenschutzgesetz zu schutzen.</p>
<hr/>
<h2>2. ERFASSTE DATEN</h2>
<h3>2.1 Vom Benutzer bereitgestellte Daten</h3>
<table>
<thead><tr><th>Daten</th><th>Zweck</th><th>Rechtsgrundlage</th></tr></thead>
<tbody>
<tr><td>E-Mail-Adresse</td><td>Kontoerstellung, Kommunikation</td><td>Vertragserfullung</td></tr>
<tr><td>Vorname</td><td>Personalisierung der Erfahrung</td><td>Vertragserfullung</td></tr>
<tr><td>Geschlecht</td><td>Inhaltspersonalisierung (Avatar, Vorschlage)</td><td>Vertragserfullung</td></tr>
<tr><td>Geburtsdatum</td><td>Altersanzeige, Mindestaltersprufung</td><td>Berechtigtes Interesse</td></tr>
<tr><td>Grosse (cm)</td><td>KI-Avatar- und Proportionskalibrierung</td><td>Vertragserfullung</td></tr>
<tr><td>Kleidergrossen</td><td>"Meine Grossen"-Funktion und Empfehlungen</td><td>Vertragserfullung</td></tr>
<tr><td>Kleidungsfotos</td><td>Kleiderschrank-Digitalisierung</td><td>Vertragserfullung</td></tr>
<tr><td>Selfie- und Ganzkorperfotos</td><td>KI-Avatar-Generierung</td><td>Ausdruckliche Einwilligung</td></tr>
</tbody>
</table>
<h3>2.2 Vom Dienst generierte Daten</h3>
<table>
<thead><tr><th>Daten</th><th>Zweck</th></tr></thead>
<tbody>
<tr><td>KI-regenerierte Kleidungsbilder</td><td>Anzeige im virtuellen Kleiderschrank</td></tr>
<tr><td>Zusammengesetzte Look-Bilder</td><td>Outfit-Visualisierung</td></tr>
<tr><td>Generierter KI-Avatar</td><td>Realistische Look-Erstellung</td></tr>
<tr><td>Korperproportionsdaten (JSONB)</td><td>Avatar-Kalibrierung</td></tr>
<tr><td>Kleidungstragehistorie</td><td>Statistiken und Rotation</td></tr>
<tr><td>Looks und Planung</td><td>Planungsfunktion</td></tr>
<tr><td>Reisedaten</td><td>Virtueller Koffer</td></tr>
</tbody>
</table>
<h3>2.3 Automatisch erfasste Daten</h3>
<table>
<thead><tr><th>Daten</th><th>Zweck</th></tr></thead>
<tbody>
<tr><td>Geolokalisierung (falls autorisiert)</td><td>Lokale Wetteranzeige</td></tr>
<tr><td>Telefonsprache</td><td>Automatische Spracherkennung</td></tr>
<tr><td>Geratetyp und Betriebssystem</td><td>Kompatibilitat und Fehlersuche</td></tr>
</tbody>
</table>
<h3>2.4 NICHT erfasste Daten</h3>
<p>BISK8 erfasst NICHT: Ihre Telefonkontakte, Nachrichten, Browserverlauf, Finanzdaten oder biometrische Daten.</p>
<hr/>
<h2>3. FOTOVERARBEITUNG — KRITISCHER PUNKT</h2>
<h3>3.1 Kleidungsfotos</h3>
<p>Hochgeladene Kleidungsfotos werden verarbeitet, analysiert und als professionelle Produktbilder regeneriert. Das Originalfoto wird NICHT aufbewahrt.</p>
<h3>3.2 Selfie- und Ganzkorperfotos (KI-Avatar)</h3>
<p><strong>ABSOLUTES VERTRAULICHKEITSVERSPRECHEN:</strong></p>
<ul>
<li><strong>Kein Mitarbeiter hat Zugang zu personlichen Fotos der Benutzer.</strong></li>
<li><strong>Fotos werden nie von einem Menschen angesehen, moderiert oder analysiert.</strong></li>
<li><strong>Fotos werden nie geteilt, verkauft oder an Dritte ubertragen.</strong></li>
<li><strong>Fotos werden nie zum Training von KI-Modellen verwendet.</strong></li>
</ul>
<hr/>
<h2>4. UNTERAUFTRAGSVERARBEITER UND DATENTRANSFERS</h2>
<table>
<thead><tr><th>Unterauftragsverarbeiter</th><th>Land</th><th>Zweck</th><th>Verarbeitete Daten</th></tr></thead>
<tbody>
<tr><td><strong>Supabase</strong></td><td>EU (Frankfurt)</td><td>Hosting, Speicherung, Authentifizierung</td><td>Alle Benutzerdaten</td></tr>
<tr><td><strong>Google (Gemini API)</strong></td><td>USA</td><td>KI-Bildgenerierung</td><td>Kleidungs- und Avatar-Fotos</td></tr>
<tr><td><strong>Anthropic (Claude API)</strong></td><td>USA</td><td>KI-Kleidungsklassifizierung</td><td>Kleidungsfotos</td></tr>
<tr><td><strong>OpenWeatherMap</strong></td><td>UK</td><td>Wetterdaten</td><td>GPS-Koordinaten</td></tr>
<tr><td><strong>Apple / Google</strong></td><td>USA</td><td>Zahlungsabwicklung</td><td>Abrechnungsdaten</td></tr>
<tr><td><strong>RevenueCat</strong></td><td>USA</td><td>Abonnementverwaltung</td><td>Benutzer-ID, Abonnementstatus</td></tr>
<tr><td><strong>Firebase (FCM)</strong></td><td>USA</td><td>Push-Benachrichtigungen</td><td>Benachrichtigungstoken</td></tr>
</tbody>
</table>
<hr/>
<h2>5. AUFBEWAHRUNGSDAUER</h2>
<table>
<thead><tr><th>Daten</th><th>Aufbewahrungsdauer</th></tr></thead>
<tbody>
<tr><td>Kontodaten</td><td>Bis zur Kontoloschung</td></tr>
<tr><td>Regenerierte Kleidungsfotos</td><td>Bis zur Loschung des Kleidungsstucks oder Kontos</td></tr>
<tr><td>Selfie- und Ganzkorperfotos</td><td>Bis zur Loschung des Avatars oder Kontos</td></tr>
<tr><td>Looks und Planung</td><td>Bis zur Loschung des Looks oder Kontos</td></tr>
<tr><td>Reisedaten</td><td>Bis zur Loschung der Reise oder des Kontos</td></tr>
<tr><td>Geolokalisierungsdaten</td><td>Nicht gespeichert (30-Minuten-Cache)</td></tr>
<tr><td>Technische Logs</td><td>Maximal 90 Tage</td></tr>
</tbody>
</table>
<hr/>
<h2>6. DATENSICHERHEIT</h2>
<ul>
<li><strong>Verschlusselung bei Ubertragung:</strong> TLS 1.2+</li>
<li><strong>Verschlusselung im Ruhezustand:</strong> auf Supabase-Servern verschlusselt</li>
<li><strong>Datenisolierung:</strong> Row Level Security</li>
<li><strong>Sichere Authentifizierung:</strong> E-Mail, Google und Apple Sign-In</li>
</ul>
<hr/>
<h2>7. IHRE RECHTE</h2>
<p>Gemaess DSGVO und nDSG haben Sie folgende Rechte: Auskunftsrecht, Recht auf Berichtigung, Recht auf Loschung, Recht auf Datenubertragbarkeit, Widerspruchsrecht, Recht auf Widerruf der Einwilligung, Beschwerderecht bei einer Aufsichtsbehorde.</p>
<p>Kontakt: <strong>contact@bisk8.co</strong> — Antwort innerhalb von 30 Tagen.</p>
<hr/>
<h2>8. COOKIES</h2>
<p>Die BISK8-App verwendet keine Cookies. Wir nutzen nur den lokalen Telefonspeicher (SharedPreferences).</p>
<hr/>
<h2>9. WERBUNG UND DATENMONETARISIERUNG</h2>
<p><strong>BISK8 zeigt keine Werbung an und verkauft, vermietet oder teilt keine personlichen Daten fur Werbezwecke.</strong></p>
<hr/>
<h2>10. SCHUTZ VON MINDERJAHRIGEN</h2>
<p>Die Anwendung ist fur Personen ab 13 Jahren bestimmt. Kinderprofile werden vollstandig von den Eltern verwaltet.</p>
<hr/>
<h2>11. ANDERUNGEN DER RICHTLINIE</h2>
<p>BISK8 behalt sich das Recht vor, diese Richtlinie zu andern. Bei wesentlichen Anderungen werden die Benutzer mindestens 30 Tage vorher informiert.</p>
<hr/>
<h2>12. KONTAKT</h2>
<p><strong>BISK8 — Datenschutz</strong><br/>Cristiano Vilas Boas<br/>Barcelos, Portugal<br/>E-Mail: contact@bisk8.co</p>
<p>Antwort innerhalb von maximal 30 Tagen.</p>`,

es: `<h1>POLITICA DE PRIVACIDAD — BISK8</h1>
<p><strong>Ultima actualizacion: 12 de marzo de 2026</strong></p>
<hr/>
<h2>1. INTRODUCCION</h2>
<p>La presente Politica de Privacidad describe como BISK8 recopila, utiliza, almacena y protege sus datos personales cuando utiliza nuestra aplicacion movil.</p>
<p><strong>Responsable del tratamiento:</strong><br/>BISK8<br/>Barcelos, Portugal<br/>Email: contact@bisk8.co</p>
<p>BISK8 se compromete a proteger su privacidad conforme al RGPD (Reglamento UE 2016/679), la nueva ley federal suiza de proteccion de datos (nLPD) y la ley portuguesa de proteccion de datos.</p>
<hr/>
<h2>2. DATOS RECOPILADOS</h2>
<h3>2.1 Datos proporcionados por el usuario</h3>
<table>
<thead><tr><th>Dato</th><th>Finalidad</th><th>Base legal</th></tr></thead>
<tbody>
<tr><td>Direccion de email</td><td>Creacion de cuenta, comunicacion</td><td>Ejecucion del contrato</td></tr>
<tr><td>Nombre</td><td>Personalizacion de la experiencia</td><td>Ejecucion del contrato</td></tr>
<tr><td>Genero</td><td>Personalizacion del contenido</td><td>Ejecucion del contrato</td></tr>
<tr><td>Fecha de nacimiento</td><td>Verificacion de edad minima</td><td>Interes legitimo</td></tr>
<tr><td>Altura (cm)</td><td>Calibracion del avatar IA</td><td>Ejecucion del contrato</td></tr>
<tr><td>Tallas de ropa</td><td>Funcion "Mis Tallas" y recomendaciones</td><td>Ejecucion del contrato</td></tr>
<tr><td>Fotos de prendas</td><td>Digitalizacion del armario</td><td>Ejecucion del contrato</td></tr>
<tr><td>Fotos selfie y de cuerpo entero</td><td>Generacion del avatar IA</td><td>Consentimiento explicito</td></tr>
</tbody>
</table>
<h3>2.2 Datos generados por el servicio</h3>
<table>
<thead><tr><th>Dato</th><th>Finalidad</th></tr></thead>
<tbody>
<tr><td>Imagenes de prendas regeneradas por IA</td><td>Visualizacion en el armario virtual</td></tr>
<tr><td>Imagenes de looks compuestos</td><td>Visualizacion de atuendos</td></tr>
<tr><td>Avatar IA generado</td><td>Creacion de looks realistas</td></tr>
<tr><td>Datos de proporciones corporales (JSONB)</td><td>Calibracion del avatar</td></tr>
<tr><td>Historial de uso de prendas</td><td>Estadisticas y rotacion</td></tr>
<tr><td>Looks y planificacion</td><td>Funcion de planificacion</td></tr>
<tr><td>Datos de viaje</td><td>Maleta virtual</td></tr>
</tbody>
</table>
<h3>2.3 Datos recopilados automaticamente</h3>
<table>
<thead><tr><th>Dato</th><th>Finalidad</th></tr></thead>
<tbody>
<tr><td>Geolocalizacion (si autorizada)</td><td>Clima local</td></tr>
<tr><td>Idioma del telefono</td><td>Deteccion automatica del idioma</td></tr>
<tr><td>Tipo de dispositivo y SO</td><td>Compatibilidad</td></tr>
</tbody>
</table>
<h3>2.4 Datos NO recopilados</h3>
<p>BISK8 NO recopila: contactos, mensajes, historial de navegacion, datos financieros ni datos biometricos.</p>
<hr/>
<h2>3. PROCESAMIENTO DE FOTOS</h2>
<p>Las fotos se procesan mediante IA y se regeneran como imagenes profesionales. La foto original NO se conserva. Las fotos de avatar se almacenan de forma segura con Row Level Security.</p>
<p><strong>COMPROMISO DE CONFIDENCIALIDAD ABSOLUTA:</strong> Ningun empleado accede a las fotos. Las fotos nunca se comparten ni se usan para entrenar modelos de IA.</p>
<hr/>
<h2>4. SUBENCARGADOS Y TRANSFERENCIAS</h2>
<table>
<thead><tr><th>Subencargado</th><th>Pais</th><th>Finalidad</th><th>Datos tratados</th></tr></thead>
<tbody>
<tr><td><strong>Supabase</strong></td><td>UE (Frankfurt)</td><td>Alojamiento, almacenamiento</td><td>Todos los datos</td></tr>
<tr><td><strong>Google (Gemini API)</strong></td><td>USA</td><td>Generacion de imagenes IA</td><td>Fotos</td></tr>
<tr><td><strong>Anthropic (Claude API)</strong></td><td>USA</td><td>Clasificacion IA</td><td>Fotos de prendas</td></tr>
<tr><td><strong>OpenWeatherMap</strong></td><td>UK</td><td>Datos meteorologicos</td><td>Coordenadas GPS</td></tr>
<tr><td><strong>Apple / Google</strong></td><td>USA</td><td>Pagos</td><td>Datos de facturacion</td></tr>
<tr><td><strong>RevenueCat</strong></td><td>USA</td><td>Gestion de suscripciones</td><td>ID de usuario</td></tr>
<tr><td><strong>Firebase (FCM)</strong></td><td>USA</td><td>Notificaciones push</td><td>Token de notificacion</td></tr>
</tbody>
</table>
<hr/>
<h2>5. PERIODO DE CONSERVACION</h2>
<table>
<thead><tr><th>Dato</th><th>Periodo</th></tr></thead>
<tbody>
<tr><td>Datos de cuenta</td><td>Hasta la eliminacion de la cuenta</td></tr>
<tr><td>Fotos regeneradas</td><td>Hasta la eliminacion de la prenda o cuenta</td></tr>
<tr><td>Fotos de avatar</td><td>Hasta la eliminacion del avatar o cuenta</td></tr>
<tr><td>Looks y planificacion</td><td>Hasta la eliminacion del look o cuenta</td></tr>
<tr><td>Datos de geolocalizacion</td><td>No almacenados (cache de 30 min)</td></tr>
<tr><td>Logs tecnicos</td><td>90 dias maximo</td></tr>
</tbody>
</table>
<hr/>
<h2>6. SEGURIDAD DE LOS DATOS</h2>
<ul>
<li><strong>Cifrado en transito:</strong> TLS 1.2+</li>
<li><strong>Cifrado en reposo:</strong> en servidores Supabase</li>
<li><strong>Aislamiento de datos:</strong> Row Level Security</li>
<li><strong>Autenticacion segura:</strong> email, Google y Apple Sign-In</li>
</ul>
<hr/>
<h2>7. SUS DERECHOS</h2>
<p>Conforme al RGPD: acceso, rectificacion, supresion, portabilidad, oposicion, retirada del consentimiento, reclamacion ante una autoridad de control.</p>
<p>Contacto: <strong>contact@bisk8.co</strong> — Respuesta en 30 dias.</p>
<hr/>
<h2>8. COOKIES</h2>
<p>La aplicacion BISK8 no utiliza cookies. Solo utilizamos almacenamiento local (SharedPreferences).</p>
<hr/>
<h2>9. PUBLICIDAD</h2>
<p><strong>BISK8 no muestra publicidad y no vende datos personales a terceros.</strong></p>
<hr/>
<h2>10. PROTECCION DE MENORES</h2>
<p>La Aplicacion esta destinada a personas de 13 anos o mas. Los perfiles infantiles son gestionados por los padres.</p>
<hr/>
<h2>11. CAMBIOS EN LA POLITICA</h2>
<p>BISK8 se reserva el derecho de modificar esta Politica. Los usuarios seran informados con 30 dias de antelacion.</p>
<hr/>
<h2>12. CONTACTO</h2>
<p><strong>BISK8 — Proteccion de datos</strong><br/>Cristiano Vilas Boas<br/>Barcelos, Portugal<br/>Email: contact@bisk8.co</p>`,

it: `<h1>POLITICA SULLA PRIVACY — BISK8</h1>
<p><strong>Ultimo aggiornamento: 12 marzo 2026</strong></p>
<hr/>
<h2>1. INTRODUZIONE</h2>
<p>La presente Politica sulla Privacy descrive come BISK8 raccoglie, utilizza, conserva e protegge i vostri dati personali.</p>
<p><strong>Titolare del trattamento:</strong><br/>BISK8<br/>Barcelos, Portugal<br/>Email: contact@bisk8.co</p>
<p>BISK8 si impegna a proteggere la vostra privacy in conformita al GDPR (Regolamento UE 2016/679), alla nuova legge federale svizzera sulla protezione dei dati (nLPD) e alla legge portoghese sulla protezione dei dati.</p>
<hr/>
<h2>2. DATI RACCOLTI</h2>
<h3>2.1 Dati forniti dall'utente</h3>
<table>
<thead><tr><th>Dato</th><th>Finalita</th><th>Base giuridica</th></tr></thead>
<tbody>
<tr><td>Indirizzo email</td><td>Creazione account, comunicazione</td><td>Esecuzione del contratto</td></tr>
<tr><td>Nome</td><td>Personalizzazione dell'esperienza</td><td>Esecuzione del contratto</td></tr>
<tr><td>Genere</td><td>Personalizzazione dei contenuti</td><td>Esecuzione del contratto</td></tr>
<tr><td>Data di nascita</td><td>Verifica eta minima</td><td>Interesse legittimo</td></tr>
<tr><td>Altezza (cm)</td><td>Calibrazione avatar IA</td><td>Esecuzione del contratto</td></tr>
<tr><td>Taglie di abbigliamento</td><td>Funzione "Le mie taglie"</td><td>Esecuzione del contratto</td></tr>
<tr><td>Foto di capi</td><td>Digitalizzazione del guardaroba</td><td>Esecuzione del contratto</td></tr>
<tr><td>Foto selfie e corpo intero</td><td>Generazione avatar IA</td><td>Consenso esplicito</td></tr>
</tbody>
</table>
<h3>2.2-2.4</h3>
<p>Dati generati dal servizio includono immagini rigenerate, avatar, cronologia di utilizzo, look e pianificazione. Dati automatici: geolocalizzazione, lingua, tipo di dispositivo. BISK8 NON raccoglie: contatti, messaggi, cronologia di navigazione, dati finanziari o biometrici.</p>
<hr/>
<h2>3. TRATTAMENTO DELLE FOTO</h2>
<p><strong>IMPEGNO DI RISERVATEZZA ASSOLUTA:</strong> Nessun dipendente accede alle foto. Le foto non vengono mai condivise, vendute o utilizzate per addestrare modelli IA.</p>
<hr/>
<h2>4. SUB-RESPONSABILI E TRASFERIMENTI</h2>
<table>
<thead><tr><th>Sub-responsabile</th><th>Paese</th><th>Finalita</th><th>Dati trattati</th></tr></thead>
<tbody>
<tr><td><strong>Supabase</strong></td><td>UE (Francoforte)</td><td>Hosting, archiviazione</td><td>Tutti i dati</td></tr>
<tr><td><strong>Google (Gemini API)</strong></td><td>USA</td><td>Generazione immagini IA</td><td>Foto</td></tr>
<tr><td><strong>Anthropic (Claude API)</strong></td><td>USA</td><td>Classificazione IA</td><td>Foto di capi</td></tr>
<tr><td><strong>OpenWeatherMap</strong></td><td>UK</td><td>Dati meteo</td><td>Coordinate GPS</td></tr>
<tr><td><strong>Apple / Google</strong></td><td>USA</td><td>Pagamenti</td><td>Dati di fatturazione</td></tr>
<tr><td><strong>RevenueCat</strong></td><td>USA</td><td>Gestione abbonamenti</td><td>ID utente</td></tr>
<tr><td><strong>Firebase (FCM)</strong></td><td>USA</td><td>Notifiche push</td><td>Token di notifica</td></tr>
</tbody>
</table>
<hr/>
<h2>5-11</h2>
<p>I dati vengono conservati fino alla cancellazione dell'account o dell'elemento specifico. Logs tecnici: 90 giorni max. Sicurezza: TLS 1.2+, crittografia, Row Level Security. Diritti GDPR: accesso, rettifica, cancellazione, portabilita, opposizione, revoca del consenso, reclamo. Nessun cookie, nessuna pubblicita. Protezione dei minori: 13+ anni. Modifiche notificate con 30 giorni di anticipo.</p>
<hr/>
<h2>12. CONTATTO</h2>
<p><strong>BISK8 — Protezione dei dati</strong><br/>Cristiano Vilas Boas<br/>Barcelos, Portugal<br/>Email: contact@bisk8.co</p>
<p>Risposta entro 30 giorni.</p>`,

pt: `<h1>POLITICA DE PRIVACIDADE — BISK8</h1>
<p><strong>Ultima atualizacao: 12 de marco de 2026</strong></p>
<hr/>
<h2>1. INTRODUCAO</h2>
<p>A presente Politica de Privacidade descreve como a BISK8 recolhe, utiliza, armazena e protege os seus dados pessoais quando utiliza a nossa aplicacao movel.</p>
<p><strong>Responsavel pelo tratamento:</strong><br/>BISK8<br/>Barcelos, Portugal<br/>Email: contact@bisk8.co</p>
<p>A BISK8 compromete-se a proteger a sua privacidade em conformidade com o RGPD (Regulamento UE 2016/679), a nova lei federal suica de protecao de dados (nLPD) e a lei portuguesa de protecao de dados pessoais (Lei n.58/2019).</p>
<hr/>
<h2>2. DADOS RECOLHIDOS</h2>
<h3>2.1 Dados fornecidos pelo utilizador</h3>
<table>
<thead><tr><th>Dado</th><th>Finalidade</th><th>Base legal</th></tr></thead>
<tbody>
<tr><td>Endereco de email</td><td>Criacao de conta, comunicacao</td><td>Execucao do contrato</td></tr>
<tr><td>Nome</td><td>Personalizacao da experiencia</td><td>Execucao do contrato</td></tr>
<tr><td>Genero</td><td>Personalizacao do conteudo</td><td>Execucao do contrato</td></tr>
<tr><td>Data de nascimento</td><td>Verificacao de idade minima</td><td>Interesse legitimo</td></tr>
<tr><td>Altura (cm)</td><td>Calibracao do avatar IA</td><td>Execucao do contrato</td></tr>
<tr><td>Tamanhos de roupa</td><td>Funcao "Os meus tamanhos"</td><td>Execucao do contrato</td></tr>
<tr><td>Fotos de pecas</td><td>Digitalizacao do guarda-roupa</td><td>Execucao do contrato</td></tr>
<tr><td>Fotos selfie e corpo inteiro</td><td>Geracao do avatar IA</td><td>Consentimento explicito</td></tr>
</tbody>
</table>
<h3>2.2-2.4</h3>
<p>Dados gerados pelo servico incluem imagens regeneradas, avatar, historico de utilizacao. Dados automaticos: geolocalizacao, idioma, tipo de dispositivo. A BISK8 NAO recolhe: contactos, mensagens, historico de navegacao, dados financeiros ou biometricos.</p>
<hr/>
<h2>3. TRATAMENTO DE FOTOS</h2>
<p><strong>COMPROMISSO DE CONFIDENCIALIDADE ABSOLUTA:</strong> Nenhum funcionario acede as fotos. As fotos nunca sao partilhadas, vendidas ou utilizadas para treinar modelos de IA.</p>
<hr/>
<h2>4. SUBCONTRATANTES E TRANSFERENCIAS</h2>
<table>
<thead><tr><th>Subcontratante</th><th>Pais</th><th>Finalidade</th><th>Dados tratados</th></tr></thead>
<tbody>
<tr><td><strong>Supabase</strong></td><td>UE (Frankfurt)</td><td>Alojamento, armazenamento</td><td>Todos os dados</td></tr>
<tr><td><strong>Google (Gemini API)</strong></td><td>USA</td><td>Geracao de imagens IA</td><td>Fotos</td></tr>
<tr><td><strong>Anthropic (Claude API)</strong></td><td>USA</td><td>Classificacao IA</td><td>Fotos de pecas</td></tr>
<tr><td><strong>OpenWeatherMap</strong></td><td>UK</td><td>Dados meteorologicos</td><td>Coordenadas GPS</td></tr>
<tr><td><strong>Apple / Google</strong></td><td>USA</td><td>Pagamentos</td><td>Dados de faturacao</td></tr>
<tr><td><strong>RevenueCat</strong></td><td>USA</td><td>Gestao de subscricoes</td><td>ID de utilizador</td></tr>
<tr><td><strong>Firebase (FCM)</strong></td><td>USA</td><td>Notificacoes push</td><td>Token de notificacao</td></tr>
</tbody>
</table>
<hr/>
<h2>5-11</h2>
<p>Dados conservados ate a eliminacao da conta. Logs tecnicos: 90 dias max. Seguranca: TLS 1.2+, encriptacao, Row Level Security. Direitos RGPD: acesso, retificacao, apagamento, portabilidade, oposicao, retirada de consentimento, reclamacao. Sem cookies, sem publicidade. Protecao de menores: 13+ anos. Alteracoes notificadas com 30 dias de antecedencia.</p>
<hr/>
<h2>12. CONTACTO</h2>
<p><strong>BISK8 — Protecao de dados</strong><br/>Cristiano Vilas Boas<br/>Barcelos, Portugal<br/>Email: contact@bisk8.co</p>
<p>Resposta num prazo maximo de 30 dias.</p>`,

ar: `<h1>سياسة الخصوصية — BISK8</h1>
<p><strong>اخر تحديث: 12 مارس 2026</strong></p>
<hr/>
<h2>1. المقدمة</h2>
<p>تصف سياسة الخصوصية هذه كيفية جمع BISK8 لبياناتكم الشخصية واستخدامها وتخزينها وحمايتها عند استخدام تطبيقنا المحمول.</p>
<p><strong>المسؤول عن المعالجة:</strong><br/>BISK8<br/>بارسيلوش، البرتغال<br/>البريد الالكتروني: contact@bisk8.co</p>
<p>تلتزم BISK8 بحماية خصوصيتكم وفقا للائحة العامة لحماية البيانات (GDPR) والقانون الفيدرالي السويسري الجديد لحماية البيانات والقانون البرتغالي لحماية البيانات الشخصية.</p>
<hr/>
<h2>2. البيانات المجمعة</h2>
<h3>2.1 البيانات المقدمة من المستخدم</h3>
<table>
<thead><tr><th>البيانات</th><th>الغرض</th><th>الاساس القانوني</th></tr></thead>
<tbody>
<tr><td>البريد الالكتروني</td><td>انشاء الحساب، التواصل</td><td>تنفيذ العقد</td></tr>
<tr><td>الاسم الاول</td><td>تخصيص التجربة</td><td>تنفيذ العقد</td></tr>
<tr><td>الجنس</td><td>تخصيص المحتوى</td><td>تنفيذ العقد</td></tr>
<tr><td>تاريخ الميلاد</td><td>التحقق من العمر</td><td>مصلحة مشروعة</td></tr>
<tr><td>الطول</td><td>معايرة الصورة الرمزية</td><td>تنفيذ العقد</td></tr>
<tr><td>مقاسات الملابس</td><td>ميزة "مقاساتي"</td><td>تنفيذ العقد</td></tr>
<tr><td>صور الملابس</td><td>رقمنة خزانة الملابس</td><td>تنفيذ العقد</td></tr>
<tr><td>صور السيلفي والجسم</td><td>انشاء الصورة الرمزية</td><td>موافقة صريحة</td></tr>
</tbody>
</table>
<h3>2.2-2.4</h3>
<p>البيانات المولدة تشمل الصور المعاد انشاؤها والصور الرمزية والتاريخ. البيانات التلقائية: الموقع الجغرافي واللغة والجهاز. لا تجمع BISK8: جهات الاتصال والرسائل وسجل التصفح والبيانات المالية او البيومترية.</p>
<hr/>
<h2>3. معالجة الصور</h2>
<p><strong>التزام بالسرية المطلقة:</strong> لا يوجد موظف لديه وصول للصور الشخصية. لا تتم مشاركة الصور او بيعها او استخدامها لتدريب نماذج الذكاء الاصطناعي.</p>
<hr/>
<h2>4. المعالجون الفرعيون والتحويلات</h2>
<table>
<thead><tr><th>المعالج الفرعي</th><th>البلد</th><th>الغرض</th><th>البيانات المعالجة</th></tr></thead>
<tbody>
<tr><td><strong>Supabase</strong></td><td>الاتحاد الاوروبي</td><td>الاستضافة والتخزين</td><td>جميع البيانات</td></tr>
<tr><td><strong>Google (Gemini API)</strong></td><td>الولايات المتحدة</td><td>انشاء صور بالذكاء الاصطناعي</td><td>الصور</td></tr>
<tr><td><strong>Anthropic (Claude API)</strong></td><td>الولايات المتحدة</td><td>تصنيف الملابس</td><td>صور الملابس</td></tr>
<tr><td><strong>OpenWeatherMap</strong></td><td>المملكة المتحدة</td><td>بيانات الطقس</td><td>احداثيات GPS</td></tr>
<tr><td><strong>Apple / Google</strong></td><td>الولايات المتحدة</td><td>المدفوعات</td><td>بيانات الفواتير</td></tr>
<tr><td><strong>RevenueCat</strong></td><td>الولايات المتحدة</td><td>ادارة الاشتراكات</td><td>معرف المستخدم</td></tr>
<tr><td><strong>Firebase (FCM)</strong></td><td>الولايات المتحدة</td><td>اشعارات الدفع</td><td>رمز الاشعار</td></tr>
</tbody>
</table>
<hr/>
<h2>5-11</h2>
<p>يتم حفظ البيانات حتى حذف الحساب. سجلات تقنية: 90 يوما كحد اقصى. الامان: TLS 1.2+، تشفير، Row Level Security. حقوق GDPR: الوصول، التصحيح، المحو، النقل، الاعتراض، سحب الموافقة، تقديم شكوى. لا كوكيز، لا اعلانات. حماية القاصرين: 13+ سنة.</p>
<hr/>
<h2>12. الاتصال</h2>
<p><strong>BISK8 — حماية البيانات</strong><br/>Cristiano Vilas Boas<br/>بارسيلوش، البرتغال<br/>البريد الالكتروني: contact@bisk8.co</p>
<p>الرد خلال 30 يوما كحد اقصى.</p>`,

zh: `<h1>隐私政策 — BISK8</h1>
<p><strong>最后更新：2026年3月12日</strong></p>
<hr/>
<h2>1. 简介</h2>
<p>本隐私政策描述了BISK8在您使用我们的移动应用程序时如何收集、使用、存储和保护您的个人数据。</p>
<p><strong>数据控制者：</strong><br/>BISK8<br/>巴塞洛斯，葡萄牙<br/>电子邮件：contact@bisk8.co</p>
<p>BISK8致力于根据《通用数据保护条例》（GDPR）、瑞士新联邦数据保护法（nFADP）和葡萄牙个人数据保护法保护您的隐私。</p>
<hr/>
<h2>2. 收集的数据</h2>
<h3>2.1 用户提供的数据</h3>
<table>
<thead><tr><th>数据</th><th>目的</th><th>法律依据</th></tr></thead>
<tbody>
<tr><td>电子邮件地址</td><td>创建账户、通信</td><td>合同履行</td></tr>
<tr><td>名字</td><td>体验个性化</td><td>合同履行</td></tr>
<tr><td>性别</td><td>内容个性化</td><td>合同履行</td></tr>
<tr><td>出生日期</td><td>年龄验证</td><td>合法利益</td></tr>
<tr><td>身高（厘米）</td><td>AI虚拟形象校准</td><td>合同履行</td></tr>
<tr><td>服装尺码</td><td>"我的尺码"功能</td><td>合同履行</td></tr>
<tr><td>服装照片</td><td>衣橱数字化</td><td>合同履行</td></tr>
<tr><td>自拍和全身照片</td><td>AI虚拟形象生成</td><td>明确同意</td></tr>
</tbody>
</table>
<h3>2.2-2.4</h3>
<p>服务生成的数据包括再生图像、虚拟形象、使用历史。自动数据：地理位置、语言、设备类型。BISK8不收集：联系人、消息、浏览历史、财务数据或生物特征数据。</p>
<hr/>
<h2>3. 照片处理</h2>
<p><strong>绝对保密承诺：</strong>没有员工可以访问个人照片。照片绝不会被分享、出售或用于训练AI模型。</p>
<hr/>
<h2>4. 子处理者和数据传输</h2>
<table>
<thead><tr><th>子处理者</th><th>国家</th><th>目的</th><th>处理的数据</th></tr></thead>
<tbody>
<tr><td><strong>Supabase</strong></td><td>欧盟（法兰克福）</td><td>托管、存储</td><td>所有数据</td></tr>
<tr><td><strong>Google (Gemini API)</strong></td><td>美国</td><td>AI图像生成</td><td>照片</td></tr>
<tr><td><strong>Anthropic (Claude API)</strong></td><td>美国</td><td>AI服装分类</td><td>服装照片</td></tr>
<tr><td><strong>OpenWeatherMap</strong></td><td>英国</td><td>天气数据</td><td>GPS坐标</td></tr>
<tr><td><strong>Apple / Google</strong></td><td>美国</td><td>支付</td><td>账单数据</td></tr>
<tr><td><strong>RevenueCat</strong></td><td>美国</td><td>订阅管理</td><td>用户ID</td></tr>
<tr><td><strong>Firebase (FCM)</strong></td><td>美国</td><td>推送通知</td><td>通知令牌</td></tr>
</tbody>
</table>
<hr/>
<h2>5-11</h2>
<p>数据保留至账户删除。技术日志：最多90天。安全性：TLS 1.2+、加密、Row Level Security。GDPR权利：访问、更正、删除、可携带性、反对、撤回同意、投诉。无Cookie，无广告。未成年人保护：13岁以上。</p>
<hr/>
<h2>12. 联系方式</h2>
<p><strong>BISK8 — 数据保护</strong><br/>Cristiano Vilas Boas<br/>巴塞洛斯，葡萄牙<br/>电子邮件：contact@bisk8.co</p>
<p>我们承诺在30天内处理您的请求。</p>`,

ru: `<h1>ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ — BISK8</h1>
<p><strong>Последнее обновление: 12 марта 2026 г.</strong></p>
<hr/>
<h2>1. ВВЕДЕНИЕ</h2>
<p>Настоящая Политика конфиденциальности описывает, как BISK8 собирает, использует, хранит и защищает ваши персональные данные при использовании нашего мобильного приложения.</p>
<p><strong>Контролер данных:</strong><br/>BISK8<br/>Барселуш, Португалия<br/>Электронная почта: contact@bisk8.co</p>
<p>BISK8 обязуется защищать вашу конфиденциальность в соответствии с GDPR (Регламент ЕС 2016/679), новым Федеральным законом Швейцарии о защите данных (nFADP) и Португальским законом о защите персональных данных.</p>
<hr/>
<h2>2. СОБИРАЕМЫЕ ДАННЫЕ</h2>
<h3>2.1 Данные, предоставленные пользователем</h3>
<table>
<thead><tr><th>Данные</th><th>Цель</th><th>Правовая основа</th></tr></thead>
<tbody>
<tr><td>Адрес электронной почты</td><td>Создание аккаунта, коммуникация</td><td>Исполнение договора</td></tr>
<tr><td>Имя</td><td>Персонализация опыта</td><td>Исполнение договора</td></tr>
<tr><td>Пол</td><td>Персонализация контента</td><td>Исполнение договора</td></tr>
<tr><td>Дата рождения</td><td>Проверка минимального возраста</td><td>Законный интерес</td></tr>
<tr><td>Рост (см)</td><td>Калибровка ИИ-аватара</td><td>Исполнение договора</td></tr>
<tr><td>Размеры одежды</td><td>Функция "Мои размеры"</td><td>Исполнение договора</td></tr>
<tr><td>Фотографии одежды</td><td>Оцифровка гардероба</td><td>Исполнение договора</td></tr>
<tr><td>Селфи и фото в полный рост</td><td>Генерация ИИ-аватара</td><td>Явное согласие</td></tr>
</tbody>
</table>
<h3>2.2-2.4</h3>
<p>Генерируемые данные включают регенерированные изображения, аватар, историю ношения. Автоматические данные: геолокация, язык, тип устройства. BISK8 НЕ собирает: контакты, сообщения, историю браузера, финансовые или биометрические данные.</p>
<hr/>
<h2>3. ОБРАБОТКА ФОТОГРАФИЙ</h2>
<p><strong>ОБЯЗАТЕЛЬСТВО АБСОЛЮТНОЙ КОНФИДЕНЦИАЛЬНОСТИ:</strong> Ни один сотрудник не имеет доступа к личным фотографиям. Фотографии никогда не передаются, не продаются и не используются для обучения моделей ИИ.</p>
<hr/>
<h2>4. СУБОБРАБОТЧИКИ И ПЕРЕДАЧА ДАННЫХ</h2>
<table>
<thead><tr><th>Субобработчик</th><th>Страна</th><th>Цель</th><th>Обрабатываемые данные</th></tr></thead>
<tbody>
<tr><td><strong>Supabase</strong></td><td>ЕС (Франкфурт)</td><td>Хостинг, хранение</td><td>Все данные</td></tr>
<tr><td><strong>Google (Gemini API)</strong></td><td>США</td><td>Генерация изображений ИИ</td><td>Фотографии</td></tr>
<tr><td><strong>Anthropic (Claude API)</strong></td><td>США</td><td>Классификация одежды ИИ</td><td>Фото одежды</td></tr>
<tr><td><strong>OpenWeatherMap</strong></td><td>Великобритания</td><td>Данные о погоде</td><td>GPS-координаты</td></tr>
<tr><td><strong>Apple / Google</strong></td><td>США</td><td>Платежи</td><td>Платежные данные</td></tr>
<tr><td><strong>RevenueCat</strong></td><td>США</td><td>Управление подписками</td><td>ID пользователя</td></tr>
<tr><td><strong>Firebase (FCM)</strong></td><td>США</td><td>Push-уведомления</td><td>Токен уведомлений</td></tr>
</tbody>
</table>
<hr/>
<h2>5-11</h2>
<p>Данные хранятся до удаления аккаунта. Технические логи: максимум 90 дней. Безопасность: TLS 1.2+, шифрование, Row Level Security. Права по GDPR: доступ, исправление, удаление, переносимость, возражение, отзыв согласия, жалоба. Без cookies, без рекламы. Защита несовершеннолетних: 13+ лет.</p>
<hr/>
<h2>12. КОНТАКТ</h2>
<p><strong>BISK8 — Защита данных</strong><br/>Cristiano Vilas Boas<br/>Барселуш, Португалия<br/>Электронная почта: contact@bisk8.co</p>
<p>Мы обязуемся обработать ваш запрос в течение максимум 30 дней.</p>`,

};

export default privacyTranslations;
