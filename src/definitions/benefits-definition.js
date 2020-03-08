export class BenefitsDefinition {
  constructor(
    id,
    name,
    employmentStatus,
    hourlyRate,
    baseSalary,
    totalIncome,
    medical,
    medAmt,
    dental,
    dentAmt,
    vision,
    visnAmt,
    healthSavingsAccount,
    hsaAmt,
    retirement,
    lifeInsurance,
    accidental,
    longTermDisb,
    medicare,
    holidays,
    winterLeave,
    totalBenefits,
    totalSalaryAndBenefits,
    pctBenToSal
  ) {
    this.id = id;
    this.name = name;
    this.employmentStatus = employmentStatus;
    this.hourlyRate = hourlyRate;
    this.baseSalary = baseSalary;
    this.totalIncome = totalIncome;
    this.medical = medical;
    this.medAmt = medAmt;
    this.dental = dental;
    this.dentAmt = dentAmt;
    this.vision = vision;
    this.visnAmt = visnAmt;
    this.healthSavingsAccount = healthSavingsAccount;
    this.hsaAmt = hsaAmt;
    this.retirement = retirement;
    this.lifeInsurance = lifeInsurance;
    this.accidental = accidental;
    this.longTermDisb = longTermDisb;
    this.medicare = medical;
    this.holidays = holidays;
    this.winterLeave = winterLeave;
    this.totalBenefits = totalBenefits;
    this.totalSalaryAndBenefits = totalSalaryAndBenefits;
    this.pctBenToSal = pctBenToSal;
  }
}
