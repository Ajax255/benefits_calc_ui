<template>
    <div>{{ jsonStruct }}</div>
</template>

<script>
      export default{
          data(){
              return{
                  jsonStruct: [{
                      salary: [{
                        baseSalary: "45000",
                        totalSalary: "45000",
                      }
                      ],
                      benefits: [{
                        medicalSingle: "5568",
                        dentalSingle: "355",
                        visionSingle: "77",
                        retirement: "6300",
                        healthSavingsAccount: "500",
                        lifeInsurance: "144",
                        accidentalDeath: "22",
                        longTermDis: "108",
                        medicare: "653",
                        holidays: "1731",
                        winterLeave: "346",
                        aproxTotal: "15804"
                      }]

                  }
                  ]
              }
          }
      }
</script>