		var together = new Date();
		together.setFullYear(2011,4,-14-1);//���һҳ��ʱ�� ��,��,
		together.setHours(0);
		together.setMinutes(0);
		together.setSeconds(0);
		together.setMilliseconds(0);
	      timeElapse(together);
			setInterval(function () {
				timeElapse(together);
			}, 500);



//	���Ȩ���� ���̲��ͣ�http://ws234.com)