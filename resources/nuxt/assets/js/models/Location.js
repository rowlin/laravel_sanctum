export class Address {
  constructor(item = {}) {
    this.id = item.id || null
    this.country_id = item.country_id || 1
    this.county_id = item.county_id || null
    this.town_id = item.town_id || null
    this.district_id = item.district_id || null
    this.street = item.street || ''
    this.house_nr = item.house_nr || ''
    this.flat_nr = item.flat_nr || null,
      this.place = item.place || ''
    this.hide_house_nr = item.hide_house_nr || false
    this.hide_flat_nr = item.hide_flat_nr || false
    this.full_address = item.full_address || ''
    this.lat = item.lat || ''
    this.lon = item.lon || ''
    this.cadastral_no = item.cadastral_no || null
    this.realestate_no = item.realestate_no || null
    this.distance_from_tallinn = item.distance_from_tallinn || null
  }
}
