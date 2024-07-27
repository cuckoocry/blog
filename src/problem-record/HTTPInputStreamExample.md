---
title: 根据文件下载地址获取流
date: 2023-08-18
category:
  - 文件下载
---

### 根据文件下载地址获取流

```java
import java.io.IOException;
import java.io.InputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;

public class HTTPInputStreamExample {
    public static void main(String[] args) {
        //String urlStr = "http://172.18.20.15:8080/sfgk/pub/download.do?path=szjh%2F7bf4e83827d9092cbaf54f5e9f9e1ce5%2Fff808081760299d101760299d1250000/民事调解书.doc";

        String urlStr = "http://172.25.17.12:9090/jyhzx/wszx/2400/2022/08/26/d4f32f9ea3454264a0d400dedd4179d9/%E6%89%A7%E8%A1%8C%E9%A3%8E%E9%99%A9%E5%91%8A%E7%9F%A5%E4%B9%A6/%E6%89%A7%E8%A1%8C%E9%A3%8E%E9%99%A9%E5%91%8A%E7%9F%A5%E4%B9%A6.docx?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=minio%2F20230816%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230816T030924Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=ec995e8cbf769c643ec3b1bf56afb029213bd598c35e45de5c4d0fb0c6372837";


        try {
            int lastSlashIndex = urlStr.lastIndexOf('/');
            String encodedPart = urlStr.substring(lastSlashIndex + 1);
            if (!StandardCharsets.US_ASCII.newEncoder().canEncode(encodedPart)) {
                encodedPart = URLEncoder.encode(encodedPart, "UTF-8");
            }
            String newUrlStr = urlStr.substring(0, lastSlashIndex + 1) + encodedPart;

            URL url = new URL(newUrlStr);

            // Open a connection to the URL
            HttpURLConnection connection = (HttpURLConnection) url.openConnection();

            // Set up the connection properties
            connection.setRequestMethod("GET");
            connection.setDoInput(true);

            // Connect to the URL
            connection.connect();

            // Check if the response code indicates success
            int responseCode = connection.getResponseCode();
            if (responseCode == HttpURLConnection.HTTP_OK) {
                // Get the InputStream from the connection
                InputStream inputStream = connection.getInputStream();

                // Use the inputStream as needed (e.g., read/write data)

                // Don't forget to close the inputStream when you're done
                inputStream.close();
            } else {
                System.out.println("HTTP request failed with response code: " + responseCode);
            }

            // Disconnect and clean up the connection
            connection.disconnect();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}


```
