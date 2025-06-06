import React from "react";

type PrivacyPolicyModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const PrivacyPolicyModal: React.FC<PrivacyPolicyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-2xl p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
          aria-label="Close"
        >
          ✕
        </button>
        <h2 className="text-2xl font-bold mb-4">Privacy Policy</h2>
        <div className="max-h-[400px] overflow-y-auto space-y-4 text-gray-700">
          <p>
            By way of introduction, we would like to draw your attention to our extensive information on creating transparency according to Articles 13 and 14 GDPR.
          </p>
          <p>
            1. Controller for data processing The controller for data processing on this website pursuant to Article 4 No 7 GDPR and the provider of the website (service provider) is Solunar. 129 moo 2 Bang Sare, Sattahip, Chon Buri 20250 Thailand E-mail: solunarvilla@gmail.com Contact details of the Data Protection Officer You can reach our Data Protection Officer at Solunar. 129 moo 2 Bang Sare, Sattahip, Chon Buri 20250 Thailand E-mail: solunarvilla@gmail.com
          </p>
          <p>
            2. Purposes and legal basis for processing personal data We process your personal data in accordance with the provisions of the EU General Data Protection Regulation (GDPR) (a) For processing and managing reservation inquiries and reservations as well as for providing our services under the accommodation agreement, including execution of your hotel stay and payments processing (in particular also for tracking your use of our services (telephone, bar, spa, pay TV programmes, etc.) – the legal basis for this is the first sentence of Article 6(1)(b)) GDPR. (b) For fulfilling a legal obligation to which our company is subject as controller (e.g. by reason of reporting legislation, tax laws, accounting obligations, etc.) – the legal basis for this is the first sentence of Article 6(1)(c)) GDPR. (c) For sending our e-mail newsletter including managing your subscription to the newsletter – the legal basis for this is your consent pursuant to the first sentence of Article 6(1)(a)) GDPR.(d) For maintaining, safeguarding and improving the quality of our products and services, in particular by performing and analysing satisfaction surveys and guest comments, by processing your personal data in our centralised guest database enabling us to recognise you as a returning guest, to better appreciate your expectations and wishes, to improve the quality and individual character of our communication with you and to create offerings tailored to you – the legal basis for this is the first sentence of Article 6(1)(f)) GDPR. Our overriding legitimate interests arise from the accommodation agreement entered into with you representing a relative and appropriate relationship within the meaning of Recital 47 of the GDPR, as well as from the fact that this type of data processing is standard industry practice with international hotel groups and is in keeping with the reasonable expectations of the majority of guests. As part of the group of undertakings to which the companies operating hotels under the umbrella brand SALA

Hospitality belong (in this regard cf. also item 4 below – Categories of recipients), our company moreover has a legitimate interest, pursuant to Recital 48 of the GDPR, in transmitting personal data of the guests within the group of undertakings for internal administrative purposes. (e) For direct advertising of our offerings and services – the legal basis for this is the first sentence of Article 6(1)(f)) GDPR. Our overriding legitimate interest follows from Recital 47 of the GDPR. (f) For ensuring compliance with house rules, for preventing and clarifying criminal acts (in particular also by video monitoring), for establishing and defending against legal claims and for safeguarding interests in legal disputes, for ensuring IT security and IT operation, for identifying credit risks – the legal basis for this is the first sentence of Article 6(1)(f) GDPR. Our overriding legitimate interests following from our obligation to ensure that our guests have a safe stay in the hotel as well as from our interest in enforcing our tangible and intangible claims and safeguarding our rights as well as defending against unjustified claims. Furthermore, the processing of personal data in the scope which is absolutely required to prevent fraud pursuant to Recital 47 of the GDPR likewise constitutes a legitimate interest of our company. Minors Minors may not send any personal data to us without the consent of their parents or guardians. Through our website, we do not process any personal data knowingly acquired from minors.
          </p>
          <p>
            3. Categories of personal data recipients If and to the extent required for the purposes as set out above under item 3, we also disclose your personal information to the following recipients or categories of recipients pursuant to Article 4 No 9 GDPR:Within our company only those persons or entities are permitted to view or access your data (to the extent required in each case) who need such data for performance of our contractual and statutory duties.Furthermore, a disclosure of data may be made to public bodies and institutions if a statutory obligation to do so exists (e.g. financial authorities, criminal prosecution authorities).Further data recipients may be those entities for which you have given us your consent to data transfer.
          </p>
          <p>
            4. Transfer of personal data to a third country A transfer of personal data to entities in countries outside the European Union (third countries) takes place if (a) it is required to carry out your reservations or execute your hotel stay, (b) it is prescribed by law, or (c) you have given us your consent. Our company for certain tasks uses service providers which have

their corporate seat in a third country or which belong to an international group with companies in third countries or which for their part work together with service providers having their seat in a third country. A transfer of personal data to such service providers is permissible if the European Commission has decided that the third country in question ensures an adequate level of protection (pursuant to Article 45 GDPR). If the Commission has not made such decision, our company or the service provider may transfer personal data to a third country or an international organisation only if appropriate safeguards are provided for and enforceable data rights and effective legal remedies are available (Article 46(1) GDPR). Beyond the cases mentioned above, our company does not transfer personal data to entities in third countries or to international organisations.
          </p>
          <p>5. Period of storage of personal data and criteria for defining such period We process and store your personal data for as long as required for us to fulfil our contractual and legal duties. If the data are no longer required for fulfilment of contractual duties, they are normally deleted unless their further processing for a limited term is required by retention periods prescribed by commercial or tax legislation. The periods prescribed for their storage and/or documentation purposes range from two to ten years.</p>
          <p>6. Your rights as a data subject Every data subject whose personal data are processed has the right to obtain information from the controller about the personal data in question pursuant to Article 15 GDPR, the right to rectification pursuant to Article 16 GDPR, the right to erasure pursuant to Article 17 GDPR, the right to restriction of processing pursuant to Article 18 GDPR, the right to object to the processing pursuant to Article 21 GDPR as well as the right to data portability pursuant to Article 20 GDPR. The right to obtain information and the right to erasure are further subject to the restrictions pursuant to sections 34 and 35 BDSG-new.Further information on your right to object to processing pursuant to Article 21 GDPR.If the processing of your personal data is based on a consent granted to us, you have the right to revoke your consent at any time without the legality of the processing performed on the basis of such consent up to revocation being affected thereby.Your also have the right to lodge a complaint with the competent data protection supervisory authority pursuant to Article 77 GDPR in conjunction with section 19 BDSG-new.</p>
          <p>7. Obligation to provide data As part of our contractual relationship, you are required provide such personal data which are required

to establish and perform the accommodation agreement or which we are legally required to collect. Without such data, we will generally not be able to conclude the agreement with you or to execute the same. We are particularly required by local law to record certain personal data about you on the registration card. In the event you should not provide us with the necessary information, we might not be able to provide you with the requested services or might not be able to do so completely.</p>
          <p>8. Automated decision-making and profiling When establishing and executing our contractual relationship, you will not be subjected to a decision based solely on automated processing, including profiling, pursuant to Article 22 GDPR, which produces legal effects concerning you or similarly affects you in a serious way.</p>
          <p>9. Additional information on your right to object pursuant to Article 21 GDPR You have the right to object, on grounds relating to your particular situation, at any time to processing of personal data concerning yourself which are based on the first sentence of Article 6(1)(e)) GDPR (data processing in the public interest) or the first sentence of Article 6(1)(f)) GDPR (data processing based on a balancing of interests), including profiling based on those provisions pursuant to Article 4(4) GDPR.If you make an objection, we will no longer process your personal data unless we can demonstrate compelling legitimate grounds for the processing which override your interests, rights and freedoms, or for the establishment, exercise or defence of legal claims.If your personal data are processed by us for direct marketing purposes, you have the right to object at any time to processing of personal data concerning yourself for such marketing, which includes profiling to the extent that it is related to such direct marketing.The objection may be made without any particular form and should be directed to our Data Protection Officer under the contact details specified in item 2 above.</p>
          
        </div>
        <div className="mt-6 text-right">
          <button
            onClick={onClose}
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyModal;
