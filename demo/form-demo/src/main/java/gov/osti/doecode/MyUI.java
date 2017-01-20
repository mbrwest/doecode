package gov.osti.doecode;

import javax.servlet.annotation.WebServlet;

import com.vaadin.annotations.Theme;
import com.vaadin.annotations.VaadinServletConfiguration;
import com.vaadin.server.VaadinRequest;
import com.vaadin.server.VaadinServlet;
import com.vaadin.ui.Panel;
import com.vaadin.ui.UI;
import com.vaadin.ui.VerticalLayout;

/**
 * This UI is the application entry point. A UI may either represent a browser window 
 * (or tab) or some part of a html page where a Vaadin application is embedded.
 * <p>
 * The UI is initialized using {@link #init(VaadinRequest)}. This method is intended to be 
 * overridden to add component to the user interface and initialize non-component functionality.
 */
@Theme("mytheme")
public class MyUI extends UI {

    private RepositoryForm form = new RepositoryForm(this);
    
    @Override
    protected void init(VaadinRequest vaadinRequest) {
//        final VerticalLayout layout = new VerticalLayout();
//        
//        layout.setMargin(true);
//        layout.setSpacing(true);
//        
//        Panel form_panel = new Panel("Software Metadata");
//        form_panel.setSizeUndefined();
//        form_panel.setContent(form);
//        
//        layout.addComponents(form_panel);
//        
//        setContent(layout);

          setContent(form);
    }

    @WebServlet(urlPatterns = "/*", name = "MyUIServlet", asyncSupported = true)
    @VaadinServletConfiguration(ui = MyUI.class, productionMode = false)
    public static class MyUIServlet extends VaadinServlet {
    }
}