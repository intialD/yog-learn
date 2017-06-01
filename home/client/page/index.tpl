{% extends 'home:page/layout.tpl' %}

{% block content %}
     <div id="pages-container">
         {% widget "home:widget/message/message.tpl"%}
         {% widget "home:widget/search/search.tpl" %}
     </div>
{% endblock %}