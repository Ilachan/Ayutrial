import React from 'react';
import { InfoSection } from '../../components';
import { clinicalData } from './Data';

function ClinicalTrialData() {
  return (
    <>
    <InfoSection {...clinicalData} />
     <p>Study 1 
      NCT Number:                   NCT04288219
      Title:                        Non-Invasive Positive Pressure Ventilation Management of High Altitude Pulmonary Edema
      Status:                       Not yet recruiting
      Conditions:                   High Altitude Pulmonary Edema|Non-Invasive Positive Pressure Ventilation|Hypoxia
      Interventions:                Device: Non-Invasive Positive Pressure Ventilation|Drug: Nifedipine|Other: supplemental oxygen
      Sponsor/Collaborators:        Massachusetts General Hospital|Himalayan Rescue Association
      Age:                          18 Years to 80 Years   (Adult, Older Adult)
      Enrollment:                   16
      Study Designs:                Allocation: Randomized|Intervention Model: Single Group Assignment|Masking: None (Open Label)|Primary Purpose: Treatment
      Start Date:                   March 2020
      Completion Date:              June 2021
      Locations:                    Himalayan Rescue Association, Kathmandu, Nep</p>
      

    </>
  );
}

export default ClinicalTrialData;

