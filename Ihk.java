public class Ihk {

    static int arr[][] = { { 4200, 1200 }, { 900, 340 }, { 1800, 600 }, { 3600, 1100 }, { 2700, 800 }, { 5900, 1300 } };

    public static Double[] prozente(int arr[][]) {
        Double[] result = new Double[5];
        Double grp0 = 0.0;
        Double grp1 = 0.0;
        Double grp2 = 0.0;
        Double grp3 = 0.0;
        Double grp4 = 0.0;
        Double pro0 = 0.0;
        Double pro1 = 0.0;
        Double pro2 = 0.0;
        Double pro3 = 0.0;
        Double pro4 = 0.0;
        for (int i = 0; i < arr.length; i++) {
            if (arr[i][0] < 1000) {
                pro0 +=  (double) arr[i][1] / (double) arr[i][0];
                grp0++;
            } else if (arr[i][0] < 2000) {
                pro1 += (double) arr[i][1] / (double) arr[i][0];
                grp1++;
                System.out.println(pro1 +" " + grp1);
            } else if (arr[i][0] < 3000) {
                pro2 += (double) arr[i][1] / (double) arr[i][0];
                grp2++;
            } else if (arr[i][0] < 4000) {
                pro3 += (double) arr[i][1] / (double) arr[i][0];
                grp3++;
            } else if(arr[i][0] >= 4000){
                pro4 += (double) arr[i][1] / (double) arr[i][0];
                grp4++;
            }
        }
        result[0] = (pro0 / grp0) * 100;
        result[1] = (pro1 / grp1) * 100;
        result[2] = (pro2 / grp2) * 100;
        result[3] = (pro3 / grp3) * 100;
        result[4] = (pro4 / grp4) * 100;
        return result;
    }

    public static void main(String[] args) {
        Double result[] = prozente(arr);
        for (int i = 0; i < result.length; i++) {
            System.out.println(i + " " + result[i]);
        }
    }
}