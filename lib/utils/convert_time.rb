# frozen_string_literal: true

module Utils
  # rubocop:disable Style/Documentation
  class ConvertTime
    def self.only_date(params)
      params.to_date.strftime('%d/%m/%Y')
    end
  end
  # rubocop:enable Style/Documentation
end
