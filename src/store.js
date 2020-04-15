import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

function initialState() {
  return {
    name: "1",
    class: "1",
    hourlyRate: "1",
    baseSalary: "1",
    totalIncome: "1",
    medical: "1",
    medAmt: "1",
    dental: "1",
    dentAmt: "1",
    vision: "1",
    visnAmt: "1",
    healthSavingsAccount: "1",
    hsaAmt: "1",
    retirement: "1",
    lifeInsurance: "1",
    accidental: "1",
    longTermDisb: "1",
    medicare: "1",
    holidays: "1",
    winterLeave: "1",
    totalBenefits: "1",
    totalSalaryAndBenefits: "1",
    pctBenToSal: "1"
  };
}

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: initialState(),
  mutations: {
    RESET(state) {
      Object.assign(state, initialState());
    },
    RESTORE(state, status) {
      Object.assign(state, status);
    },
    SET_BENTFITS(state, status) {
      state.name = status["Name"];
      state.class = status["Class"];
      state.hourlyRate = status["Hourly Rate"];
      state.baseSalary = status["Base Salary"];
      state.totalIncome = status["Total Income"];
      state.medical = status["Medical"];
      state.medAmt = status["MedAmt"];
      state.dental = status["Dental"];
      state.dentAmt = status["DentAmt"];
      state.vision = status["Vision"];
      state.visnAmt = status["VisnAmt"];
      state.healthSavingsAccount = status["Health Savings Account"];
      state.hsaAmt = status["HSA Amt"];
      state.retirement = status["Retirement"];
      state.lifeInsurance = status["Life Insurance"];
      state.accidental = status["Accidental"];
      state.longTermDisb = status["Long Term Disb"];
      state.medicare = status["Medicare"];
      state.holidays = status["Holidays"];
      state.winterLeave = status["Winter Leave"];
      state.totalBenefits = status["Total Benefits"];
      state.totalSalaryAndBenefits = status["Total Salary and Benefits"];
      state.pctBenToSal = status["Pct Ben to Sal"];
    },
    SET_NAME(state, status) {
      state.name = status;
    },
    SET_EMPLOYMENT_STATUS(state, status) {
      state.SET_EmploymentStatus = status;
    },
    SET_HOURLY_RATE(state, status) {
      state.hourlyRate = status;
    },
    SET_BASE_SALARY(state, status) {
      state.baseSalary = status;
    },
    SET_TOTAL_INCOME(state, status) {
      state.totalBenefits = status;
    },
    SET_MEDICAL(state, status) {
      state.medical = status;
    },
    SET_MED_AMT(state, status) {
      state.medAmt = status;
    },
    SET_DENTAL(state, status) {
      state.dental = status;
    },
    SET_DENT_AMT(state, status) {
      state.dentAmt = status;
    },
    SET_VISION(state, status) {
      state.vision = status;
    },
    SET_VISN_AMT(state, status) {
      state.visnAmt = status;
    },
    SET_HEALTH_SAVINGS_ACCOUNT(state, status) {
      state.healthSavingsAccount = status;
    },
    SET_HSA_AMT(state, status) {
      state.hsaAmt = status;
    },
    SET_RETIREMENT(state, status) {
      state.retirement = status;
    },
    SET_LIFE_INSURANCE(state, status) {
      state.lifeInsurance = status;
    },
    SET_ACCIDENTAL(state, status) {
      state.accidental = status;
    },
    SET_LONG_TERM_DISB(state, status) {
      state.longTermDisb = status;
    },
    SET_MEDICARE(state, status) {
      state.medicare = status;
    },
    SET_HOLIDAYS(state, status) {
      state.holidays = status;
    },
    SET_WINTER_LEAVE(state, status) {
      state.winterLeave = status;
    },
    SET_TOTAL_BENEFITS(state, status) {
      state.totalBenefits = status;
    },
    SET_TOTAL_SALARY_AND_BENEFITS(state, status) {
      state.totalSalaryAndBenefits = status;
    },
    SET_PCT_BEN_TO_SAL(state, status) {
      state.pctBenToSal = status;
    }
  },
  actions: {
    reset({ commit }) {
      commit("RESET");
    },
    restore({ commit }, status) {
      commit("RESTORE", status);
    },
    setBenefits({ commit }, status) {
      commit("SET_BENTFITS", status);
    },
    setName({ commit }, status) {
      commit("SET_NAME", status);
    },
    setEmploymentStatus({ commit }, status) {
      commit("SET_EMPLOYMENT_STATUS", status);
    },
    setHourlyRate({ commit }, status) {
      commit("SET_HOURLY_RATE", status);
    },
    setBaseSalary({ commit }, status) {
      commit("SET_BASE_SALARY", status);
    },
    setTotalIncome({ commit }, status) {
      commit("SET_TOTAL_INCOME", status);
    },
    setMedical({ commit }, status) {
      commit("SET_MEDICAL", status);
    },
    setMedAmt({ commit }, status) {
      commit("SET_MED_AMT", status);
    },
    setDental({ commit }, status) {
      commit("SET_DENTAL", status);
    },
    setDentAmt({ commit }, status) {
      commit("SET_DENT_AMT", status);
    },
    setVision({ commit }, status) {
      commit("SET_VISION", status);
    },
    setVisnAmt({ commit }, status) {
      commit("SET_VISN_AMT", status);
    },
    setHealthSavingsAccount({ commit }, status) {
      commit("SET_HEALTH_SAVINGS_ACCOUNT", status);
    },
    setHsaAmt({ commit }, status) {
      commit("SET_HSA_AMT", status);
    },
    setRetirement({ commit }, status) {
      commit("SET_RETIREMENT", status);
    },
    setLifeInsurance({ commit }, status) {
      commit("SET_LIFE_INSURANCE", status);
    },
    setAccidental({ commit }, status) {
      commit("SET_ACCIDENTAL", status);
    },
    setLongTermDisb({ commit }, status) {
      commit("SET_LONG_TERM_DISB", status);
    },
    setMedicare({ commit }, status) {
      commit("SET_MEDICARE", status);
    },
    setHolidays({ commit }, status) {
      commit("SET_HOLIDAYS", status);
    },
    setWinterLeave({ commit }, status) {
      commit("SET_WINTER_LEAVE", status);
    },
    setTotalBenefits({ commit }, status) {
      commit("SET_TOTAL_BENEFITS", status);
    },
    setTotalSalaryAndBenefits({ commit }, status) {
      commit("SET_TOTAL_SALARY_AND_BENEFITS", status);
    },
    setPctBenToSal({ commit }, status) {
      commit("SET_PCT_BEN_TO_SAL", status);
    }
  }
});
