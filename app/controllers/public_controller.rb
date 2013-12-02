class PublicController < ApplicationController

	def index
		@title = 'Varmt välkomna till vårt strandbröllop'
	end

	def wedding
		@title = 'Bröllopsdagen'
	end

	def living
		@title = 'Boende'
	end

	def navigation
		@title = 'Att ta sig till, samt runt på Öland'
	end

	def tips
		@title = 'Ölandstips'
	end

	def rsvp
		@title = 'O.s.a'
	end
end
