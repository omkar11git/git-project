import java.lang.reflect.Array;
import java.util.Arrays;
import java.util.List;

public class ArrayList {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		List<Integer> list=Arrays.asList(1,2,3,4,5,6);
		
		System.out.println(list);
		for(int i:list) {
			System.out.print(i+",");
		}
	}

}
