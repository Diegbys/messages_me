class User < ApplicationRecord
  validates :username, presence: true, length: { minimun: 3, maximum: 15 }, uniqueness: { case_sensitive: true }
  has_secure_password
  has_many :messages
end
