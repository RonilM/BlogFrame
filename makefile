run: blog/static/blog/js/bundle/bundle.js
	python manage.py runserver

blog/static/blog/js/bundle/bundle.js: blog/static/blog/jsx/index.jsx
	cd blog/static/blog && npm run build