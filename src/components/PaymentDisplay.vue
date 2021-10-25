<template>
  <v-container>
    <v-data-table
    :page.sync="page"
    :items-per-page="itemsPerPage"
    hide-default-footer
    @page-count="pageCount = $event"
    :headers="headers"
    :items="options"
    sort-by="calories"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar
        flat
      >
        <v-toolbar-title>My Personal Costs</v-toolbar-title>
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
        <v-spacer></v-spacer>
        <v-dialog
          v-model="dialog"
          max-width="500px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="teal"
              dark
              class="mb-2"
              v-bind="attrs"
              v-on="on"
            >
              Add New Cost <v-icon>mdi-plus</v-icon>
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="text-h5">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row class="edited-labels">
                  <v-text-field color="teal" v-model="editedItem.date" label="Date"/>
                  <v-select color="teal" v-model="editedItem.category" label="Category" :items="category" />
                  <v-text-field color="teal" v-model="editedItem.value" label="Value"/>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="teal"
                text
                @click="close"
              >
                Cancel
              </v-btn>
              <v-btn
                color="teal"
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
              <v-btn color="teal" text @click="closeDelete">Cancel</v-btn>
              <v-btn color="teal" text @click="deleteItemConfirm">OK</v-btn>
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
        color="teal"
        dark
        @click="initialize"
      >
        Reset
      </v-btn>
    </template>
  </v-data-table>

    <div class="text-center pt-2">
      <v-pagination
      class="pagination-but"
      color="teal"
        v-model="page"
        :length="pageCount"
      ></v-pagination>
    </div>
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
  data: () => ({
    id: 11,
    page: 1,
    pageCount: 0,
    itemsPerPage: 10,
    dialog: false,
    dialogDelete: false,
    category: ['IT', 'Food', 'Sport', 'Entertaiment', 'Education', 'Work', 'Navigation', 'Travel', 'Shop', 'Investments'],
    headers: [
      {
        text: '',
        align: 'start',
        sortable: false
      },
      { text: 'Date', value: 'date' },
      { text: 'Category', value: 'category' },
      { text: 'Value', value: 'value' },
      { text: 'Actions', value: 'actions', sortable: false }
    ],
    options: [],
    editedIndex: -1,
    editedItem: {
      date: '',
      category: '',
      value: 0
    },
    defaultItem: {
      date: '',
      category: '',
      value: 0
    }
  }),

  computed: {
    formTitle () {
      return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
    }
  },

  watch: {
    dialog (val) {
      val || this.close()
    },
    dialogDelete (val) {
      val || this.closeDelete()
    }
  },

  created () {
    this.initialize()
  },

  methods: {
    initialize () {
      this.options = [
        {
          date: '20.09.2001',
          category: 'IT',
          value: 231
        },
        {
          date: '08.06.1980',
          category: 'Food',
          value: 330
        },
        {
          date: '20.01.1974',
          category: 'Sport',
          value: 124
        },
        {
          date: '19.11.2013',
          category: 'Entertaiment',
          value: 467
        },
        {
          date: '10.04.2011',
          category: 'Education',
          value: 750
        },
        {
          date: '30.07.2019',
          category: 'Work',
          value: 108
        },
        {
          date: '23.02.2018',
          category: 'Navigation',
          value: 794
        },
        {
          date: '31.11.2020',
          category: 'Travel',
          value: 777
        },
        {
          date: '12.08.2021',
          category: 'Shop',
          value: 332
        },
        {
          date: '12.12.2021',
          category: 'Investments',
          value: 951
        }
      ]
    },

    editItem (item) {
      this.editedIndex = this.options.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },

    deleteItem (item) {
      this.editedIndex = this.options.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialogDelete = true
    },

    deleteItemConfirm () {
      this.options.splice(this.editedIndex, 1)
      this.closeDelete()
    },

    close () {
      this.dialog = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    closeDelete () {
      this.dialogDelete = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    save () {
      if (this.editedIndex > -1) {
        Object.assign(this.options[this.editedIndex], this.editedItem)
      } else {
        this.options.push(this.editedItem)
      }
      this.close()
    }
  }
}
</script>

<style>
.text-border {
  border-bottom: thin solid rgba(0,0,0,.12);
}
.edited-labels {
  display: flex;
  flex-direction: column;
}
</style>
