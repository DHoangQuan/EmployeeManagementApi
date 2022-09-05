# frozen_string_literal: true

# == Schema Information
#
# Table name: rates
#
#  id                                               :bigint           not null, primary key
#  external_ot                                      :float
#  external_regular                                 :float
#  holiday_rate                                     :float
#  internal_ot                                      :float
#  internal_regular                                 :float
#  status([0: current, 1:past])                     :integer          default(0), not null
#  type                                             :string           not null
#  created_at                                       :datetime         not null
#  updated_at                                       :datetime         not null
#  company_id(Check if user rates of which company) :bigint
#  resource_id                                      :bigint           not null
#
# Indexes
#
#  index_rates_on_type_and_resource_id  (type,resource_id)
#
class CompanyRate < Rate
end
