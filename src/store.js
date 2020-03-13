import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

function initialState() {
  return {
    name: '1',
    class: '1',
    hourlyRate: '1',
    baseSalary: '1',
    totalIncome: '1',
    medical: '1',
    medAmt: '1',
    dental: '1',
    dentAmt: '1',
    vision: '1',
    visnAmt: '1',
    healthSavingsAccount: '1',
    hsaAmt: '1',
    retirement: '1',
    lifeInsurance: '1',
    accidental: '1',
    longTermDisb: '1',
    medicare: '1',
    holidays: '1',
    winterLeave: '1',
    totalBenefits: '1',
    totalSalaryAndBenefits: '1',
    pctBenToSal: '1'
  };
}

export default new Vuex.Store({
  state: initialState(),
  mutations: {
    reset(state) {
      Object.assign(state, initialState());
    },
    restore(state, status) {
      Object.assign(state, status);
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
      commit('reset');
    },
    restore({ commit }, status) {
      commit('restore', status);
    },
    SET_Name({ commit }, status) {
      commit('name', status);
    },
    SET_EmploymentStatus({ commit }, status) {
      commit('employmentStatus', status);
    },
    SET_HourlyRate({ commit }, status) {
      commit('hourlyRate', status);
    },
    SET_BaseSalary({ commit }, status) {
      commit('baseSalary', status);
    },
    SET_TotalIncome({ commit }, status) {
      commit('totalIncome', status);
    },
    SET_Medical({ commit }, status) {
      commit('medical', status);
    },
    SET_MedAmt({ commit }, status) {
      commit('medAmt', status);
    },
    SET_Dental({ commit }, status) {
      commit('dental', status);
    },
    SET_DentAmt({ commit }, status) {
      commit('dentAmt', status);
    },
    SET_Vision({ commit }, status) {
      commit('vision', status);
    },
    SET_VisnAmt({ commit }, status) {
      commit('visnAmt', status);
    },
    SET_HealthSavingsAccount({ commit }, status) {
      commit('healthSavingsAccount', status);
    },
    SET_HsaAmt({ commit }, status) {
      commit('hsaAmt', status);
    },
    SET_Retirement({ commit }, status) {
      commit('retirement', status);
    },
    SET_LifeInsurance({ commit }, status) {
      commit('lifeInsurance', status);
    },
    SET_Accidental({ commit }, status) {
      commit('accidental', status);
    },
    SET_LongTermDisb({ commit }, status) {
      commit('longTermDisb', status);
    },
    SET_Medicare({ commit }, status) {
      commit('medicare', status);
    },
    SET_Holidays({ commit }, status) {
      commit('holidays', status);
    },
    SET_WinterLeave({ commit }, status) {
      commit('winterLeave', status);
    },
    SET_TotalBenefits({ commit }, status) {
      commit('totalBenefits', status);
    },
    SET_TotalSalaryAndBenefits({ commit }, status) {
      commit('totalSalaryAndBenefits', status);
    },
    SET_PctBenToSal({ commit }, status) {
      commit('pctBenToSal', status);
    }
  }
});
