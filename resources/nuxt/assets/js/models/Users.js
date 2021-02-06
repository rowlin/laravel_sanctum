export class User {
  constructor(user = {}) {
    this.id = user.id || null
    this.office_id = user.office_id || 1
    this.email = user.email || ''
    this.password = user.password || null
    this.role = user.role || 8
    this.username = user.username || ''
    this.date_logged = user.date_logged || null
    this.is_enabled = user.is_enabled || null
    this.land_id = user.land_id || 'ee'
    this.firstname = user.firstname || ''
    this.lastname = user.lastname || ''
    this.personal_id = user.personal_id || ''
    this.birth_date = user.birth_date || null
    this.contact_tel_mob = user.contact_tel_mob || ''
    this.contact_tel_land = user.contact_tel_land || ''
    this.contact_skype = user.contact_skype || ''
    this.contact_email = user.contact_email || ''
    this.contact_address = user.contact_address || null
    this.is_photo = user.is_photo || 0
    this.email_verified_at = user.email_verified_at || null
    this.created_at = user.created_at || null
    this.email_verified_at = user.email_verified_at || null
    this.permissions = user.permissions || []
    this.image = user.image || null
    this.lang_spoken = user.lang_spoken || []
    this.export = user.export || {}
    this.about = user.about || {}
    //export
    this.export = {
      city24: user.export ? user.export.city24 : {
        username: '',
        password: '',
        is_enabled: false
      },
      kv: user.export ? user.export.kv : {
        username: '',
        password: '',
        is_enabled: false
      },
    }
    //about
    this.about = {
      ee: user.about ? user.about.ee : {
        activity_area: '',
        about: ''
      },
      en: user.about ? user.about.en : {
        activity_area: '',
        about: ''
      },
      ru: user.about ? user.about.ru : {
        activity_area: '',
        about: ''
      }
    }

  }

  jsonStringify() {
    return JSON.stringify(this)
  }
}

export class Owner {
  constructor(owner = {}) {
    this.id = owner.id || null
    this.firstname = owner.firstname || ''
      this.lastname = owner.lastname || ''
      this.company_name = owner.company_name || ''
      this.phone = owner.phone || ''
      this.id_code = owner.id_code || ''
      this.comment = owner.comment || ''
      this.email = owner.email || ''
      this.agent = owner.agent || ''
      this.type_res = owner.type_res || null
      this.deal_res = owner.deal_res || null
      this.client = owner.client || 1
      this.lepping = owner.lepping || 1
      this.link = owner.link || ''
      this.profile = owner.profile || null
      this.status = owner.status || 'estate'
      this.work_status = owner.work_status || ''
      this.location = owner.location || []
      this.user_id = owner.user_id || null
  }

  jsonStringify() {
    return JSON.stringify(this)
  }
}

