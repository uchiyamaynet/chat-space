# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

# Ruby version
Ruby 2.5.1

# massagesテーブル
|Column|Type|Options|
|------|----|-------|
|body|text||
|image|string||
|group_id|integer|null: false, foreign_key: true|
|user_id|integer|null: false, foreign_key: true|

# Association
* belongs_to :user
* belongs_to :group



# usersテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|email|string|null: false, unique: true|
|password|string|null: false|

# Association
* has_many :messages
* has_many :groups, through: :group_users
* has_many :group_users



# groups_usersテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|

# Association
* has_many :messages
* has_many :users, through: :group_users
* has_many :group_users



# group_users(中間)テーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

# Association
* belongs_to :group
* belongs_to :user







