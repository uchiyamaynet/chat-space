class GroupUser < ApplicationRecord
  belongs_to :group
  belongs_to :user
end

# class GroupUser < ApplicationRecord
# end
