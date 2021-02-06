import {Address} from "./Location";

export class Estate {
  constructor(item = {}) {
    this.id = item.id
    this.estate_type_id = item.estate_type_id
    this.deal_type_id = item.deal_type_id
    this.broker_id = item.broker_id || null
    this.deal_key = item.deal_key || ''
    this.type_key = item.type_key || ''
    this.status_id = item.status_id || null
    this.images = item.images || []
    this.files = item.files || []
    this.categories = item.categories || []


    this.available_since_date = item.available_since_date || null
    this.available_now = item.available_now || null
    this.published_for_months = item.published_for_months || null

    //address
    this.address = new Address(item.address)

    //info
    this.info = {
      building_material: item.info ? item.info.building_material : '',
      roof_material: item.info ? item.info.roof_material : '',
      posetion: item.info ? item.info.posetion : '',
      condition: item.info ? item.info.condition : '',
      constraint: item.info ? item.info.constraint : null,
      stove: item.info ? item.info.stove : '',
      details_plan: item.info ? item.info.details_plan : '',
      year_built: item.info ? item.info.year_built : '',
      energy_class: item.info ? item.info.energy_class : '',
    }

    //area
    this.area = {
      rooms_count: item.area ? item.area.rooms_count : null,
      bathrooms_count: item.area ? item.area.bathrooms_count : null,
      bedrooms_count: item.area ? item.area.bedrooms_count : null,
      floor: item.area ? item.area.floor : null,
      floor_count: item.area ? item.area.floor_count : null,
      area_kitchen: item.area ? item.area.area_kitchen : null,
      parking_place_count: item.area ? item.area.parking_place_count : null,
      plot_area: item.area ? item.area.plot_area : null,
      balcony_area: item.area ? item.area.balcony_area : null,
      area_overall: item.area ? item.area.area_overall : null,
      area_land: item.area ? item.area.area_land : null,
      veekogu_kaugus: item.area ? item.area.veekogu_kaugus : null,
      veekogunimi: item.area ? item.area.veekogunimi : '',
    }

//PayCondition
    this.PayCondition = {
      deposit: item.PayCondition ? item.PayCondition.deposit : null,
      deposit_cur: item.PayCondition ? item.PayCondition.deposit_cur : 1,
      commission: item.PayCondition ? item.PayCondition.commission : null,
      commission_cur: item.PayCondition ? item.PayCondition.commission_cur : 0,
      prepayment: item.PayCondition ? item.PayCondition.prepayment : null,
      prepayment_cur: item.PayCondition ? item.PayCondition.prepayment_cur : 0,
      created_at: item.PayCondition ? item.PayCondition.created_at : null,
      updated_at: item.PayCondition ? item.PayCondition.updated_at : null,
    }


//price
    this.price = {
      price: item.price ? item.price.price : null,
      price_per_m2: item.price ? item.price.price_per_m2 : null,
      utility_summer_pay: item.price ? item.price.utility_summer_pay : null,
      utility_winter_pay: item.price ? item.price.utility_winter_pay : null
    }


//additional options
    this.classificator = {
      Property_constraint: item.classificator ? item.classificator.Property_constraint : [],
      Property_posetion_type: item.classificator ? item.classificator.Property_posetion_type : [],
      Building_material: item.classificator ? item.classificator.Building_material : [],
      Roof_material: item.classificator ? item.classificator.Roof_material : [],
      Condition: item.classificator ? item.classificator.Condition : [],
      Stove_type: item.classificator ? item.classificator.Stove_type : [],
      Business_purpose: item.classificator ? item.classificator.Business_purpose : [],
      Object_type: item.classificator ? item.classificator.Object_type : [],
      Deal_type: item.classificator ? item.classificator.Deal_type : [],
      Object_status: item.classificator ? item.classificator.Object_status : [],
      Energy_class: item.classificator ? item.classificator.Energy_class : [],


      Heating: item.classificator ? item.classificator.Heating : [],
      Balcony: item.classificator ? item.classificator.Balcony : [],
      Parking: item.classificator ? item.classificator.Parking : [],
      Telecomunication: item.classificator ? item.classificator.Telecomunication : [],
      Safety: item.classificator ? item.classificator.Safety : [],
      Sanitary: item.classificator ? item.classificator.Sanitary : [],
      Ventilation: item.classificator ? item.classificator.Ventilation : [],
      Extra_values: item.classificator ? item.classificator.Extra_values : [],
      Extra_rooms: item.classificator ? item.classificator.Extra_rooms : [],
      Kitchen: item.classificator ? item.classificator.Kitchen : [],
      Umbrus: item.classificator ? item.classificator.Umbrus : [],
    }


//description
    this.slogan = {
      ee: item.slogan ? item.slogan.ee : '',
      en: item.slogan ? item.slogan.en : '',
      ru: item.slogan ? item.slogan.ru : '',
    }
    this.description = {
      ee: item.description ? item.description.ee : '',
      en: item.description ? item.description.en : '',
      ru: item.description ? item.description.ru : '',
    }

    //GR_Table
    this.has_gr_changes = item.has_gr_changes || false
    this.gr_table = {
      gr_table_header: item.gr_table ? item.gr_table.gr_table_header : '',
      gr_table_input1: item.gr_table ? item.gr_table.gr_table_input1 : '',
      gr_table_input2: item.gr_table ? item.gr_table.gr_table_input2 : '',
      gr_table_input3: item.gr_table ? item.gr_table.gr_table_input3 : '',
      gr_table_input4: item.gr_table ? item.gr_table.gr_table_input4 : '',
      gr_table_input5: item.gr_table ? item.gr_table.gr_table_input5 : '',
      gr_table_total: item.gr_table ? item.gr_table.gr_table_total : '',
    }
  }

  jsonStringify() {
    return JSON.stringify(this)
  }
}

export class CategoryEstate {
  constructor(item = {}) {
    this.id = item.id || null,
    this.parent_id = item.parent_id || 0,
      this.slug = item.slug || '',
      this.name_ee = item.name_ee || '',
      this.name_en = item.name_en || '',
      this.name_ru = item.name_ru || '',
      this.title_ee = item.title_ee || '',
      this.title_en = item.title_en || '',
      this.title_ru = item.title_ru || '',
      this.description_ee = item.description_ee || '',
      this.description_en = item.description_en || '',
      this.description_ru = item.description_ru || '',
      this.text_ee = item.text_ee || '',
      this.text_en = item.text_en || '',
      this.text_ru = item.text_ru || '',
      this.created_at = item.created_at || null,
      this.updated_at = item.updated_at || null
  }

  jsonStringify() {
    return JSON.stringify(this)
  }
}
