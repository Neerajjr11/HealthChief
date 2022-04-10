export const Diseases = [
    {
        name: "Heart Failure",
        fname: ["Year of Birth", "Sex", "Chest pain type", "Resting Blood pressure", "Serum Cholesterol", "Fasting Blood Sugar", "Resting Electrocardiogram Results", "Maximum Heart Rate", "Exercise Induced Angina", "Old Peak", "Slope of Peak Exercise Segment"],
        ftype: ["number", "option", "option", "number", "number", "option", "option", "number", "option", "number", "option"],
        option: ["M (Male) or F (Female)", "TA (Typical Angina), ATA (Atypical Angina), NAP (Non-Anginal Pain), ASY (Asymptomatic)", "1 (If Fasting Blood Sugar > 120), 0 (Fasting Blood Sugar < 120)", "Normal (Normal), ST (ST-T wave abnormality), LVH (Probable or Definite left ventricular hypertropy)", "Y (Yes), N (No)", "Up (Upsloping), Flat (Flat), Down (Downsloping)"],
        formName: ["age", "sex", "chest-pain-type", "resting-bp", "cholesterol", "fasting-bs", "resting-ecg", "max-hr", "exercise-angina", "old-peak", "st-slope"],
        endpoints: "https://healthchief.herokuapp.com/ml_model/heart_failure/predict"
    },
    {
        name: "Diabetics",
        fname: ["Pregnancies", "Glucose", "Blood pressure", "Skin thickness", "Insulin", "BMI", "Diabetes Pedigree Function", "Age"],
        ftype: ["number", "number", "number", "number", "number", "number", "number", "number"],
        formName: ["pregnancies", "glucose", "blood-pressure", "skin-thickness", "insulin", "bmi", "diabetes-pedigree-function", "age"],
        endpoints: "https://healthchief.herokuapp.com/ml_model/diabetes/predict"
    },
    {
        name: "Skin Cancer",
        fname: ["Year of Birth", "Sex", "Chest pain type", "Resting Blood pressure", "Serum Cholesterol", "Fasting Blood Sugar", "Resting Electrocardiogram Results", "Maximum Heart Rate", "Exercise Induced Angina", "Old Peak", "Slope of Peak Exercise Segment"],
        ftype: ["number", "option", "option", "number", "number", "option", "option", "number", "option", "number", "option"],
        option: ["M (Male) or F (Female)", "TA (Typical Angina), ATA (Atypical Angina), NAP (Non-Anginal Pain), ASY (Asymptomatic)", "1 (If Fasting Blood Sugar > 120), 0 (Fasting Blood Sugar < 120)", "Normal (Normal), ST (ST-T wave abnormality), LVH (Probable or Definite left ventricular hypertropy)", "Y (Yes), N (No)", "Up (Upsloping), Flat (Flat), Down (Downsloping)"],
        formName: ["age", "sex", "chest-pain-type", "resting-bp", "cholesterol", "fasting-bs", "resting-ecg", "max-hr", "exercise-angina", "old-peak", "st-slope"],
        endpoints: "https://healthchief.herokuapp.com/ml_model/skin_cancer/predict"
    },
    {
        name: "Kidney Disease",
        fname: ["Year of Birth", "Sex", "Chest pain type", "Resting Blood pressure", "Serum Cholesterol", "Fasting Blood Sugar", "Resting Electrocardiogram Results", "Maximum Heart Rate", "Exercise Induced Angina", "Old Peak", "Slope of Peak Exercise Segment"],
        ftype: ["number", "option", "option", "number", "number", "option", "option", "number", "option", "number", "option"],
        option: ["M (Male) or F (Female)", "TA (Typical Angina), ATA (Atypical Angina), NAP (Non-Anginal Pain), ASY (Asymptomatic)", "1 (If Fasting Blood Sugar > 120), 0 (Fasting Blood Sugar < 120)", "Normal (Normal), ST (ST-T wave abnormality), LVH (Probable or Definite left ventricular hypertropy)", "Y (Yes), N (No)", "Up (Upsloping), Flat (Flat), Down (Downsloping)"],
        formName: ["age", "sex", "chest-pain-type", "resting-bp", "cholesterol", "fasting-bs", "resting-ecg", "max-hr", "exercise-angina", "old-peak", "st-slope"],
        endpoints: "https://healthchief.herokuapp.com/ml_model/kidney_disease/predict"
    },
    {
        name: "Asthma",
        fname: ["Year of Birth", "Sex", "Chest pain type", "Resting Blood pressure", "Serum Cholesterol", "Fasting Blood Sugar", "Resting Electrocardiogram Results", "Maximum Heart Rate", "Exercise Induced Angina", "Old Peak", "Slope of Peak Exercise Segment"],
        ftype: ["number", "option", "option", "number", "number", "option", "option", "number", "option", "number", "option"],
        option: ["M (Male) or F (Female)", "TA (Typical Angina), ATA (Atypical Angina), NAP (Non-Anginal Pain), ASY (Asymptomatic)", "1 (If Fasting Blood Sugar > 120), 0 (Fasting Blood Sugar < 120)", "Normal (Normal), ST (ST-T wave abnormality), LVH (Probable or Definite left ventricular hypertropy)", "Y (Yes), N (No)", "Up (Upsloping), Flat (Flat), Down (Downsloping)"],
        formName: ["age", "sex", "chest-pain-type", "resting-bp", "cholesterol", "fasting-bs", "resting-ecg", "max-hr", "exercise-angina", "old-peak", "st-slope"],
        endpoints: "https://healthchief.herokuapp.com/ml_model/asthma/predict"
    },
]