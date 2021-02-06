<template>
<div>
  <div class="row">
    <div class="col-12">
      <label for="name">{{ $t('proposal.title')}}</label>
      <input type="text" id="name" v-modal="proposal.title" >


      <label for="hold">{{ $t('proposal.method_of_holding')}}</label>
      <select id="hold" v-model="proposal.hold"  >
        <option value="" v-for="( hold , idx) in holding" :key="idx">{{ hold.name }}</option>
      </select>


      <label for="category">{{ $t('proposal.categories')}}</label>
      <select name="" id="category">
        <option value="" v-for="(cat , idx) in categories" :key="idx">{{ cat.name }}</option>
      </select>



      <label for="description"></label>
      <textarea v-model="proposal.desc" id="description" cols="30" rows="10"></textarea>

      </div>
    </div>

</div>

</template>

<script>
export default {
  name: "add_proposal",
  data(){
    return{
      proposal :{
      },
      holding :[{
       'name' : "online" ,
       'value': 0,
      },{
        'name' : "offline" ,
        'value': 1,
      }],
      categories:[{
        "name":"Walking",
        "id" : 1,
        "hold": 0,
      }, {
        "name": "Playing",
        "id": 1,
        "hold": 0,
      }
  ]

    }


  }

}



</script>

<style scoped>



</style>
