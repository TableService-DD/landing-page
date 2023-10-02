from django.contrib import admin
from django.urls import path
from myapp import views  # 'myapp'는 실제로 사용하는 앱의 이름으로 변경해야 할 수 있습니다.

urlpatterns = [
    path('admin/', admin.site.urls),  # 이 줄을 추가합니다.
    path('update_visitor/', views.update_visitor, name='update_visitor'),
    # 기타 URL 설정
]
