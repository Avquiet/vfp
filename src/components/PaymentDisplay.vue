<template>
  <v-container>
    <v-row class="text-border">
      <v-col :cols="1">#</v-col>
      <v-col :cols="4">Date</v-col>
      <v-col :cols="5">Category</v-col>
      <v-col :cols="2">Value</v-col>
    </v-row>
    <v-row class="text-border" v-for="pay in items" :key="pay.id">
      <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="blue darken-1"
                text
                @click="close"
              >
                Cancel
              </v-btn>
              <v-btn
                color="blue darken-1"
                text
                @click="save"
              >
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="text-h5">Are you sure you want to delete this item?</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:item.actions="{ item }">
      <v-icon
        small
        class="mr-2"
        @click="editItem(item)"
      >
        mdi-pencil
      </v-icon>
      <v-icon
        small
        @click="deleteItem(item)"
      >
        mdi-delete
      </v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn
        color="primary"
        @click="initialize"
      >
        Reset
      </v-btn>
    </template>
  </v-data-table>
</template>
      <v-col :cols="1">{{ pay.id }}</v-col>
      <v-col :cols="4">{{ pay.date }}</v-col>
      <v-col :cols="5">{{ pay.category }}</v-col>
      <v-col :cols="2">{{ pay.value }}</v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'PaymentDisplay',
  props: {
    items: {
      type: Array,
      default: () => []
    },
    showItems: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {}
  }
}
</script>

<style>
.text-border {
  border-bottom: thin solid rgba(0,0,0,.12);
}
</style>
