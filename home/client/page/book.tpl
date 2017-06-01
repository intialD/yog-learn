{% extends 'home:page/layout.tpl' %}

{% block content %}
    <div id="pages-container">
        <ul>
            {% for book in bookList %}
                <li>{{ book.title }},{{ book.author }}, {{ book.time }}</li>
            {% endfor %}
        </ul>
    </div>
{% endblock %}