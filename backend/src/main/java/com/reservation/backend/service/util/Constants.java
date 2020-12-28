package com.reservation.backend.service.util;

import org.springframework.context.support.ResourceBundleMessageSource;

import java.util.Locale;

public class Constants {

    private static final ResourceBundleMessageSource messageSource = new ResourceBundleMessageSource();

    public static String getTranslatedText(String text) {
        messageSource.setBasenames("lang/res");
        return messageSource.getMessage(text, null, Locale.ENGLISH);
    }

    public static final String TITLE = getTranslatedText("title");
    public static final String DESCRIPTION = getTranslatedText("description");
    public static final String END_POINTS = "";
    public static final String VERSION = "1.0.0";
    public static final String LICENSE = "Apache License Version 2.0";
    public static final String LICENSE_URL = "http://www.apache.org/licenses/LICENSE-2.0";
    public static final String CORS_URL = "http://localhost:4200";
}
